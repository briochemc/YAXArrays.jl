import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.CezpnWUb.js";const u=JSON.parse('{"title":"Opening NetCDF files","description":"","frontmatter":{},"headers":[],"relativePath":"UserGuide/openNetCDF.md","filePath":"UserGuide/openNetCDF.md","lastUpdated":null}'),n={name:"UserGuide/openNetCDF.md"},t=e(`<h1 id="Opening-NetCDF-files" tabindex="-1">Opening NetCDF files <a class="header-anchor" href="#Opening-NetCDF-files" aria-label="Permalink to &quot;Opening NetCDF files {#Opening-NetCDF-files}&quot;">​</a></h1><p>In this example we are going to use a <code>NetCDF</code> file. To open a single data file we first need to load the appropriate backend package via <code>using NetCDF</code>.</p><h2 id="File-with-one-variable" tabindex="-1">File with one variable <a class="header-anchor" href="#File-with-one-variable" aria-label="Permalink to &quot;File with one variable {#File-with-one-variable}&quot;">​</a></h2><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> YAXArrays, NetCDF</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DiskArrays</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Downloads</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://www.unidata.ucar.edu/software/netcdf/examples/tos_O1_2001-2002.nc&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">filename </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Downloads</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">download</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tos_O1_2001-2002.nc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># you pick your own path</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Cube</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(filename)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">╭────────────────────────────────────────────────╮</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">180</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">×</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">170</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">×</span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">24</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> YAXArray{Union{Missing, Float32},3}</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> │</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├────────────────────────────────────────────────┴─────────────────────── dims ┐</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  ↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">lon</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Float64} </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">1.0:2.0:359.0</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">  → </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">lat</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Float64} </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">-79.5:1.0:89.5</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">  ↗ </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">Ti </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{CFTime.DateTime360Day} </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">[CFTime.DateTime360Day(2001-01-16T00:00:00), …, CFTime.DateTime360Day(2002-12-16T00:00:00)]</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Irregular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├────────────────────────────────────────────────────────────────── metadata ┤</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Dict{String, Any} with 10 entries:</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;units&quot;          =&gt; &quot;K&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;missing_value&quot;  =&gt; 1.0f20</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;history&quot;        =&gt; &quot; At   16:37:23 on 01/11/2005: CMOR altered the data in t…</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;cell_methods&quot;   =&gt; &quot;time: mean (interval: 30 minutes)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;name&quot;           =&gt; &quot;tos&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;long_name&quot;      =&gt; &quot;Sea Surface Temperature&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;original_units&quot; =&gt; &quot;degC&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;standard_name&quot;  =&gt; &quot;sea_surface_temperature&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;_FillValue&quot;     =&gt; 1.0f20</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;original_name&quot;  =&gt; &quot;sosstsst&quot;</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├───────────────────────────────────────────────────────────────── file size ┤</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  file size: 2.8 MB</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">└────────────────────────────────────────────────────────────────────────────┘</span></span></code></pre></div><h2 id="File-with-multiple-variables,-mixed-dimensions" tabindex="-1">File with multiple variables, mixed dimensions <a class="header-anchor" href="#File-with-multiple-variables,-mixed-dimensions" aria-label="Permalink to &quot;File with multiple variables, mixed dimensions {#File-with-multiple-variables,-mixed-dimensions}&quot;">​</a></h2><p>When the dataset contains variables with different dimensions you should use <code>open_dataset</code> as in</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">path2file </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://www.unidata.ucar.edu/software/netcdf/examples/sresa1b_ncar_ccsm3-example.nc&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">filename </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Downloads</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">download</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(path2file, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sresa1b_ncar_ccsm3-example.nc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open_dataset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(filename)</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">YAXArray Dataset</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">Shared Axes:</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">lon</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Float32} </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">0.0f0:1.40625f0:358.59375f0</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">→ </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">lat</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Float32} </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">-88.927734f0:1.4004368f0:88.927734f0</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">Variables:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">pr</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  ↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">Ti</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{CFTime.DateTimeNoLeap} </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">[CFTime.DateTimeNoLeap(2000-05-16T12:00:00)]</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Irregular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">msk_rgn, area,</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">ua</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  ↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">plev</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Float64} </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">[100000.0, 92500.0, …, 2000.0, 1000.0]</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ReverseOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Irregular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">  → </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">Ti  </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{CFTime.DateTimeNoLeap} </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">[CFTime.DateTimeNoLeap(2000-05-16T12:00:00)]</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Irregular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">tas</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  ↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">Ti</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{CFTime.DateTimeNoLeap} </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">[CFTime.DateTimeNoLeap(2000-05-16T12:00:00)]</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Irregular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">Properties: Dict{String, Any}(&quot;cmd_ln&quot; =&gt; &quot;bds -x 256 -y 128 -m 23 -o /data/zender/data/dst_T85.nc&quot;, &quot;references&quot; =&gt; &quot;Collins, W.D., et al., 2005:\\n The Community Climate System Model, Version 3\\n Journal of Climate\\n \\n Main website: http://www.ccsm.ucar.edu&quot;, &quot;CVS_Id&quot; =&gt; &quot;\\$Id\\$&quot;, &quot;model_name_english&quot; =&gt; &quot;NCAR CCSM&quot;, &quot;creation_date&quot; =&gt; &quot;&quot;, &quot;acknowledgment&quot; =&gt; &quot; Any use of CCSM data should acknowledge the contribution\\n of the CCSM project and CCSM sponsor agencies with the \\n following citation:\\n &#39;This research uses data provided by the Community Climate\\n System Model project (www.ccsm.ucar.edu), supported by the\\n Directorate for Geosciences of the National Science Foundation\\n and the Office of Biological and Environmental Research of\\n the U.S. Department of Energy.&#39;\\nIn addition, the words &#39;Community Climate System Model&#39; and\\n &#39;CCSM&#39; should be included as metadata for webpages referencing\\n work using CCSM data or as keywords provided to journal or book\\npublishers of your manuscripts.\\nUsers of CCSM data accept the responsibility of emailing\\n citations of publications of research using CCSM data to\\n ccsm@ucar.edu.\\nAny redistribution of CCSM data must include this data\\n acknowledgement statement.&quot;, &quot;realization&quot; =&gt; 1, &quot;contact&quot; =&gt; &quot;ccsm@ucar.edu&quot;, &quot;Conventions&quot; =&gt; &quot;CF-1.0&quot;, &quot;history&quot; =&gt; &quot;Tue Oct 25 15:08:51 2005: ncks -O -x -v va -m sresa1b_ncar_ccsm3_0_run1_200001.nc sresa1b_ncar_ccsm3_0_run1_200001.nc\\nTue Oct 25 15:07:21 2005: ncks -d time,0 sresa1b_ncar_ccsm3_0_run1_200001_201912.nc sresa1b_ncar_ccsm3_0_run1_200001.nc\\nTue Oct 25 13:29:43 2005: ncks -d time,0,239 sresa1b_ncar_ccsm3_0_run1_200001_209912.nc /var/www/html/tmp/sresa1b_ncar_ccsm3_0_run1_200001_201912.nc\\nThu Oct 20 10:47:50 2005: ncks -A -v va /data/brownmc/sresa1b/atm/mo/va/ncar_ccsm3_0/run1/sresa1b_ncar_ccsm3_0_run1_va_200001_209912.nc /data/brownmc/sresa1b/atm/mo/tas/ncar_ccsm3_0/run1/sresa1b_ncar_ccsm3_0_run1_200001_209912.nc\\nWed Oct 19 14:55:04 2005: ncks -F -d time,01,1200 /data/brownmc/sresa1b/atm/mo/va/ncar_ccsm3_0/run1/sresa1b_ncar_ccsm3_0_run1_va_200001_209912.nc /data/brownmc/sresa1b/atm/mo/va/ncar_ccsm3_0/run1/sresa1b_ncar_ccsm3_0_run1_va_200001_209912.nc\\nWed Oct 19 14:53:28 2005: ncrcat /data/brownmc/sresa1b/atm/mo/va/ncar_ccsm3_0/run1/foo_05_1200.nc /data/brownmc/sresa1b/atm/mo/va/ncar_ccsm3_0/run1/foo_1192_1196.nc /data/brownmc/sresa1b/atm/mo/va/ncar_ccsm3_0/run1/sresa1b_ncar_ccsm3_0_run1_va_200001_209912.nc\\nWed Oct 19 14:50:38 2005: ncks -F -d time,05,1200 /data/brownmc/sresa1b/atm/mo/va/ncar_ccsm3_0/run1/va_A1.SRESA1B_1.CCSM.atmm.2000-01_cat_2099-12.nc /data/brownmc/sresa1b/atm/mo/va/ncar_ccsm3_0/run1/foo_05_1200.nc\\nWed Oct 19 14:49:45 2005: ncrcat /data/brownmc/sresa1b/atm/mo/va/ncar_ccsm3_0/run1/va_A1.SRESA1B_1.CCSM.atmm.2000-01_cat_2079-12.nc /data/brownmc/sresa1b/atm/mo/va/ncar_ccsm3_0/run1/va_A1.SRESA1B_1.CCSM.atmm.2080-01_cat_2099-12.nc /data/brownmc/sresa1b/atm/mo/va/ncar_ccsm3_0/run1/va_A1.SRESA1B_1.CCSM.atmm.2000-01_cat_2099-12.nc\\nCreated from CCSM3 case b30.040a\\n by wgstrand@ucar.edu\\n on Wed Nov 17 14:12:57 EST 2004\\n \\n For all data, added IPCC requested metadata&quot;…)</span></span></code></pre></div><p>Afterwards, selecting a variable as usual works, i.e.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ua&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">╭──────────────────────────────────────────────────╮</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">256</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">×</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">128</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">×</span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">17</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">×</span><span style="--shiki-light:#ff5f87;--shiki-dark:#ff5f87;">1</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> YAXArray{Union{Missing, Float32},4}</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> │</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├──────────────────────────────────────────────────┴───────────────────── dims ┐</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  ↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">lon </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Float32} </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">0.0f0:1.40625f0:358.59375f0</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">  → </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">lat </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Float32} </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">-88.927734f0:1.4004368f0:88.927734f0</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">  ↗ </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">plev</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Float64} </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">[100000.0, 92500.0, …, 2000.0, 1000.0]</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ReverseOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Irregular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#ff5f87;--shiki-dark:#ff5f87;">  ⬔ </span><span style="--shiki-light:#ff5f87;--shiki-dark:#ff5f87;">Ti  </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{CFTime.DateTimeNoLeap} </span><span style="--shiki-light:#ff5f87;--shiki-dark:#ff5f87;">[CFTime.DateTimeNoLeap(2000-05-16T12:00:00)]</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Irregular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├────────────────────────────────────────────────────────────────── metadata ┤</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Dict{String, Any} with 11 entries:</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;cell_methods&quot;   =&gt; &quot;time: mean (interval: 1 month)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;long_name&quot;      =&gt; &quot;eastward_wind&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;_FillValue&quot;     =&gt; 1.0f20</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;original_units&quot; =&gt; &quot;m s-1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;missing_value&quot;  =&gt; 1.0f20</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;history&quot;        =&gt; &quot;Interpolated U with NCL &#39;vinth2p_ecmwf&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;name&quot;           =&gt; &quot;ua&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;units&quot;          =&gt; &quot;m s-1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;standard_name&quot;  =&gt; &quot;eastward_wind&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;comment&quot;        =&gt; &quot;Created using NCL code CCSM_atmm_2cf.ncl on\\n machine ea…</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;original_name&quot;  =&gt; &quot;U&quot;</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├───────────────────────────────────────────────────────────────── file size ┤</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  file size: 2.12 MB</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">└────────────────────────────────────────────────────────────────────────────┘</span></span></code></pre></div><p>or</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tas&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">╭───────────────────────────────────────────────╮</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">256</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">×</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">128</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">×</span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">1</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> YAXArray{Union{Missing, Float32},3}</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> │</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├───────────────────────────────────────────────┴──────────────────────── dims ┐</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  ↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">lon</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Float32} </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">0.0f0:1.40625f0:358.59375f0</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">  → </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">lat</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Float32} </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">-88.927734f0:1.4004368f0:88.927734f0</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">  ↗ </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">Ti </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{CFTime.DateTimeNoLeap} </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">[CFTime.DateTimeNoLeap(2000-05-16T12:00:00)]</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Irregular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├────────────────────────────────────────────────────────────────── metadata ┤</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Dict{String, Any} with 13 entries:</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;cell_method&quot;    =&gt; &quot;time: mean&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;coordinates&quot;    =&gt; &quot;height&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;cell_methods&quot;   =&gt; &quot;time: mean (interval: 1 month)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;long_name&quot;      =&gt; &quot;air_temperature&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;_FillValue&quot;     =&gt; 1.0f20</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;original_units&quot; =&gt; &quot;K&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;missing_value&quot;  =&gt; 1.0f20</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;history&quot;        =&gt; &quot;Added height coordinate&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;name&quot;           =&gt; &quot;tas&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;units&quot;          =&gt; &quot;K&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;standard_name&quot;  =&gt; &quot;air_temperature&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;comment&quot;        =&gt; &quot;Created using NCL code CCSM_atmm_2cf.ncl on\\n machine ea…</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  &quot;original_name&quot;  =&gt; &quot;TREFHT&quot;</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├───────────────────────────────────────────────────────────────── file size ┤</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  file size: 128.0 KB</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">└────────────────────────────────────────────────────────────────────────────┘</span></span></code></pre></div><p>Note that their output is a YAXArray.</p>`,18),l=[t];function h(p,k,d,r,o,g){return a(),i("div",null,l)}const f=s(n,[["render",h]]);export{u as __pageData,f as default};
