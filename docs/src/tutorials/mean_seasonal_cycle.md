# Mean Seasonal Cycle for a sigle pixel

````@example mean_season
using CairoMakie
CairoMakie.activate!()
using Dates
using Statistics
````

We define the data span. For simplicity, three non-leap years were selected.

````@example mean_season
t =  Date("2021-01-01"):Day(1):Date("2023-12-31")
NpY = 3
````
and create some seasonal dummy data

````@example mean_season
x = repeat(range(0, 2π, length=365), NpY)
var = @. sin(x) + 0.1 * randn()
nothing # hide
````

````@example mean_season
lines(1:length(t), var; color = :purple, linewidth=1.25,
    axis=(; xlabel="Time", ylabel="Variable"),
    figure = (; resolution = (600,400))
    )
````

Currently makie doesn't support time axis natively, but the following function can do the work for now.

````@example mean_season
function time_ticks(dates; frac=8)
    tempo = string.(dates)
    lentime = length(tempo)
    slice_dates = range(1, lentime, step=lentime ÷ frac)
    return slice_dates, tempo[slice_dates]
end
xpos, ticks = time_ticks(t; frac=8)
nothing # hide
````

In order to apply the previous output, we split the plotting function into his 3 components, `figure`, `axis` and `plotted object`, namely

````@example mean_season
fig, ax, obj = lines(1:length(t), var; color = :purple, linewidth=1.25,
    axis=(; xlabel="Time", ylabel="Variable"),
    figure = (; resolution = (600,400))
    )
ax.xticks = (xpos, ticks)
ax.xticklabelrotation = π / 4
ax.xticklabelalign = (:right, :center)
fig
````

### Define the cube

````@ansi mean_season
using YAXArrays, DimensionalData
axes = (Dim{:Time}(t),)
c = YAXArray(axes, var)
````

Let's calculate the mean seasonal cycle of our dummy variable 'var'

````@example mean_season
function mean_seasonal_cycle(c; ndays = 365)
    ## filterig by month-day
    monthday = map(x->Dates.format(x, "u-d"), collect(c.Time))
    datesid = unique(monthday)
    ## number of years
    NpY = Int(size(monthday,1)/ndays)
    idx = Int.(zeros(ndays, NpY))
    ## get the day-month indices for data subsetting
    for i in 1:ndays
        idx[i,:] = Int.(findall(x-> x == datesid[i], monthday))
    end
    ## compute the mean seasonal cycle
    mscarray = map(x->var[x], idx)
    msc = mapslices(mean, mscarray, dims=2)
    return msc
end

msc = mean_seasonal_cycle(c);
````

TODO: Apply the new groupby funtion from DD

### Plot results: mean seasonal cycle

````@example mean_season
xpos, ticks = time_ticks(t[1:365]; frac=8)

fig, ax, obj = lines(1:365, var[1:365]; label="2021", color=:black,
    linewidth=2.0, linestyle=:dot,
    axis = (;  xlabel="Time", ylabel="Variable"),
    figure=(; size = (600,400))
    )
lines!(1:365, var[366:730], label="2022", color=:brown,
    linewidth=1.5, linestyle=:dash
    )
lines!(1:365, msc[:,1]; label="MSC", color=:dodgerblue, linewidth=2.5)
axislegend()
ax.xticks = (xpos, ticks)
ax.xticklabelrotation = π / 4
ax.xticklabelalign = (:right, :center)
fig
current_figure()
````