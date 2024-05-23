import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.BvP6Odlu.js";const u=JSON.parse('{"title":"Write YAXArrays and Datasets","description":"","frontmatter":{},"headers":[],"relativePath":"UserGuide/write.md","filePath":"UserGuide/write.md","lastUpdated":null}'),e={name:"UserGuide/write.md"},n=t(`<h1 id="Write-YAXArrays-and-Datasets" tabindex="-1">Write YAXArrays and Datasets <a class="header-anchor" href="#Write-YAXArrays-and-Datasets" aria-label="Permalink to &quot;Write YAXArrays and Datasets {#Write-YAXArrays-and-Datasets}&quot;">​</a></h1><p>Create an example Dataset:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> YAXArrays</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NetCDF</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Downloads</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> download</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">path </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> download</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://www.unidata.ucar.edu/software/netcdf/examples/tos_O1_2001-2002.nc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.nc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ds </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open_dataset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(path)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>YAXArray Dataset</span></span>
<span class="line"><span>Shared Axes: </span></span>
<span class="line"><span>↓ lon Sampled{Float64} 1.0:2.0:359.0 ForwardOrdered Regular Points,</span></span>
<span class="line"><span>→ lat Sampled{Float64} -79.5:1.0:89.5 ForwardOrdered Regular Points,</span></span>
<span class="line"><span>↗ Ti  Sampled{CFTime.DateTime360Day} [CFTime.DateTime360Day(2001-01-16T00:00:00), …, CFTime.DateTime360Day(2002-12-16T00:00:00)] ForwardOrdered Irregular Points</span></span>
<span class="line"><span>Variables: </span></span>
<span class="line"><span>tos, </span></span>
<span class="line"><span>Properties: Dict{String, Any}(&quot;cmor_version&quot; =&gt; 0.96f0, &quot;references&quot; =&gt; &quot;Dufresne et al, Journal of Climate, 2015, vol XX, p 136&quot;, &quot;realization&quot; =&gt; 1, &quot;Conventions&quot; =&gt; &quot;CF-1.0&quot;, &quot;contact&quot; =&gt; &quot;Sebastien Denvil, sebastien.denvil@ipsl.jussieu.fr&quot;, &quot;history&quot; =&gt; &quot;YYYY/MM/JJ: data generated; YYYY/MM/JJ+1 data transformed  At 16:37:23 on 01/11/2005, CMOR rewrote data to comply with CF standards and IPCC Fourth Assessment requirements&quot;, &quot;table_id&quot; =&gt; &quot;Table O1 (13 November 2004)&quot;, &quot;source&quot; =&gt; &quot;IPSL-CM4_v1 (2003) : atmosphere : LMDZ (IPSL-CM4_IPCC, 96x71x19) ; ocean ORCA2 (ipsl_cm4_v1_8, 2x2L31); sea ice LIM (ipsl_cm4_v&quot;, &quot;title&quot; =&gt; &quot;IPSL  model output prepared for IPCC Fourth Assessment SRES A2 experiment&quot;, &quot;experiment_id&quot; =&gt; &quot;SRES A2 experiment&quot;…)</span></span></code></pre></div><h2 id="Write-Zarr" tabindex="-1">Write Zarr <a class="header-anchor" href="#Write-Zarr" aria-label="Permalink to &quot;Write Zarr {#Write-Zarr}&quot;">​</a></h2><p>Save a single YAXArray to a directory:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Zarr</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">savecube</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ds</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tos, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tos.zarr&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, driver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:zarr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Save an entire Dataset to a directory:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">savedataset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ds, path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ds.zarr&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, driver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:zarr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="Write-NetCDF" tabindex="-1">Write NetCDF <a class="header-anchor" href="#Write-NetCDF" aria-label="Permalink to &quot;Write NetCDF {#Write-NetCDF}&quot;">​</a></h2><p>Save a single YAXArray to a directory:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NetCDF</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">savecube</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ds</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tos, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tos.nc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, driver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:netcdf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Save an entire Dataset to a directory:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">savedataset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ds, path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ds.nc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, driver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:netcdf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="Overwrite-a-Dataset" tabindex="-1">Overwrite a Dataset <a class="header-anchor" href="#Overwrite-a-Dataset" aria-label="Permalink to &quot;Overwrite a Dataset {#Overwrite-a-Dataset}&quot;">​</a></h2><p>If a path already exists, an error will be thrown. Set <code>overwrite=true</code> to delete the existing dataset</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">savedataset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ds, path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ds.zarr&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, driver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:zarr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, overwrite</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Again, setting <code>overwrite</code> will delete all your previous saved data.</p></div><p>Look at the doc string for more information</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="YAXArrays.Datasets.savedataset" href="#YAXArrays.Datasets.savedataset">#</a> <b><u>YAXArrays.Datasets.savedataset</u></b> — <i>Function</i>. <p>savedataset(ds::Dataset; path = &quot;&quot;, persist = nothing, overwrite = false, append = false, skeleton=false, backend = :all, driver = backend, max_cache = 5e8, writefac=4.0)</p><p>Saves a Dataset into a file at <code>path</code> with the format given by <code>driver</code>, i.e., driver=:netcdf or driver=:zarr.</p><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>overwrite = true, deletes ALL your data and it will create a new file.</p></div><p><a href="https://github.com/JuliaDataCubes/YAXArrays.jl/blob/7a80fe5734f739959efd5fc12daec711a4cd7892/src/DatasetAPI/Datasets.jl#L511-L520" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="Append-to-a-Dataset" tabindex="-1">Append to a Dataset <a class="header-anchor" href="#Append-to-a-Dataset" aria-label="Permalink to &quot;Append to a Dataset {#Append-to-a-Dataset}&quot;">​</a></h2><p>New variables can be added to an existing dataset using the <code>append=true</code> keyword.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ds2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Dataset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> YAXArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">savedataset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ds2, path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ds.zarr&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, backend</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:zarr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, append</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open_dataset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ds.zarr&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, driver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:zarr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">YAXArray Dataset</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">Shared Axes:</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">Variables:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">tos</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  ↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">lon</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Float64} </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">1.0:2.0:359.0</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">  → </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">lat</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Float64} </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">-79.5:1.0:89.5</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">  ↗ </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">Ti </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{CFTime.DateTime360Day} </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">[CFTime.DateTime360Day(2001-01-16T00:00:00), …, CFTime.DateTime360Day(2002-12-16T00:00:00)]</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Irregular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">z</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  ↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">Dim_1</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Int64} </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">1:1:10</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">  → </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">Dim_2</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Int64} </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">1:1:20</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">  ↗ </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">Dim_3</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Int64} </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">1:1:5</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">Properties: Dict{String, Any}(&quot;cmor_version&quot; =&gt; 0.96, &quot;references&quot; =&gt; &quot;Dufresne et al, Journal of Climate, 2015, vol XX, p 136&quot;, &quot;realization&quot; =&gt; 1, &quot;contact&quot; =&gt; &quot;Sebastien Denvil, sebastien.denvil@ipsl.jussieu.fr&quot;, &quot;Conventions&quot; =&gt; &quot;CF-1.0&quot;, &quot;history&quot; =&gt; &quot;YYYY/MM/JJ: data generated; YYYY/MM/JJ+1 data transformed  At 16:37:23 on 01/11/2005, CMOR rewrote data to comply with CF standards and IPCC Fourth Assessment requirements&quot;, &quot;table_id&quot; =&gt; &quot;Table O1 (13 November 2004)&quot;, &quot;source&quot; =&gt; &quot;IPSL-CM4_v1 (2003) : atmosphere : LMDZ (IPSL-CM4_IPCC, 96x71x19) ; ocean ORCA2 (ipsl_cm4_v1_8, 2x2L31); sea ice LIM (ipsl_cm4_v&quot;, &quot;title&quot; =&gt; &quot;IPSL  model output prepared for IPCC Fourth Assessment SRES A2 experiment&quot;, &quot;experiment_id&quot; =&gt; &quot;SRES A2 experiment&quot;…)</span></span></code></pre></div><h2 id="Save-Skeleton" tabindex="-1">Save Skeleton <a class="header-anchor" href="#Save-Skeleton" aria-label="Permalink to &quot;Save Skeleton {#Save-Skeleton}&quot;">​</a></h2><p>Sometimes one merely wants to create a datacube &quot;Skeleton&quot; on disk and gradually fill it with data. Here we make use of <code>FillArrays</code> to create a <code>YAXArray</code> and write only the axis data and array metadata to disk, while no actual array data is copied:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> YAXArrays, Zarr, FillArrays</span></span></code></pre></div><p>create the <code>Zeros</code> array</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> YAXArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Zeros</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Union{Missing, Int32}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">╭─────────────────────────────────────────╮</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">10</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">×</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">20</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> YAXArray{Union{Missing, Int32},2}</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> │</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├─────────────────────────────────────────┴────────────────────── dims ┐</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  ↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">Dim_1</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Int64} </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">Base.OneTo(10)</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">  → </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">Dim_2</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Int64} </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">Base.OneTo(20)</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├──────────────────────────────────────────────────────────── metadata ┤</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Dict{String, Any}()</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├─────────────────────────────────────────────────────────── file size ┤</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  file size: 800.0 bytes</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">└──────────────────────────────────────────────────────────────────────┘</span></span></code></pre></div><p>and save them as</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> savecube</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;skeleton.zarr&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, driver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:zarr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, skeleton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>and check that all the values are <code>missing</code></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ismissing,r[:,:])</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>true</span></span></code></pre></div><p>If using <code>FillArrays</code> is not possible, using the <code>zeros</code> function works as well, though it does allocate the array in memory.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The <code>skeleton</code> argument is also available for <code>savedataset</code>.</p></div>`,39),l=[n];function h(p,k,r,d,o,g){return a(),i("div",null,l)}const y=s(e,[["render",h]]);export{u as __pageData,y as default};
