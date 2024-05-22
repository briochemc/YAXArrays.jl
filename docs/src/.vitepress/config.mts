import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import mathjax3 from "markdown-it-mathjax3";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: 'REPLACE_ME_DOCUMENTER_VITEPRESS',
  title: "YAXArrays.jl",
  description: "Yet another xarray-like Julia package",
  lastUpdated: true,
  cleanUrls: true,
  outDir: 'REPLACE_ME_DOCUMENTER_VITEPRESS', // This is required for MarkdownVitepress to work correctly...
  ignoreDeadLinks: true,

  markdown: {
    math: true,
    config(md) {
      md.use(tabsMarkdownPlugin),
        md.use(mathjax3)
    },
    theme: {
      light: "github-light",
      dark: "github-dark"
    }
  },
  themeConfig: {
    outline: 'deep',
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/logo.png', width: 24, height: 24 },
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting_started' },
      {
        text: 'User Guide',
        items: [
          { text: 'Read and Write', link: '/UserGuide/read_and_write' },
          { text: 'Compute', link: '/UserGuide/compute' },
          { text: 'FAQ', link: '/UserGuide/faq' },
        ]
      },
      {
        text: 'Tutorials',
        items: [
          { text: 'Overview', link: '/tutorials/tutorial' },
          { text: 'Plotting maps', link: '/tutorials/plottingmaps' },
          { text: 'Mean Seasonal Cycle', link: '/tutorials/mean_seasonal_cycle' },
          {
            text: 'ESDL studies',
            items: [
              { text: 'ESDL study 1', link: 'https://github.com/JuliaDataCubes/YAXArrays.jl/blob/master/docs/src/tutorials/esdl/examples_from_esdl_study_1.jl' },
              { text: 'ESDL study 2', link: 'https://github.com/JuliaDataCubes/YAXArrays.jl/blob/master/docs/src/tutorials/esdl/examples_from_esdl_study_2.jl' },
              { text: 'ESDL study 3', link: 'https://github.com/JuliaDataCubes/YAXArrays.jl/blob/master/docs/src/tutorials/esdl/examples_from_esdl_study_3.jl' },
              { text: 'ESDL study 4', link: 'https://github.com/JuliaDataCubes/YAXArrays.jl/blob/master/docs/src/tutorials/esdl/examples_from_esdl_study_4.jl' },
            ]
          },
          { text: 'Other Tutorials', link: '/tutorials/other_tutorials' },
        ]
      },
      {
        text: 'Development',
        items: [
          { text: 'Contribute', link: 'development/contribute' },
          { text: 'Contributors', link: 'development/contributors' }
        ]
      },
    ],

    sidebar: [
      { text: 'Getting Started', link: '/getting_started' },
      {
        text: 'User Guide',
        items: [
          { text: 'Types', link: '/UserGuide/types' },
          { text: 'Read', link: '/UserGuide/read' },
          { text: 'Write', link: '/UserGuide/write' },
          { text: 'Subset', link: '/UserGuide/subset' },
          { text: 'Compute', link: '/UserGuide/compute' },
          { text: 'Group', link: '/UserGuide/group' },
          { text: 'Chunk', link: '/UserGuide/chunk' },
          { text: 'FAQ', link: '/UserGuide/faq' }
        ]
      },
      {
        text: 'Tutorials',
        items: [
          { text: 'Plotting maps', link: '/tutorials/plottingmaps' },
          { text: 'Mean Seasonal Cycle', link: '/tutorials/mean_seasonal_cycle' },
          { text: 'Other Tutorials', link: '/tutorials/other_tutorials' },
        ]
      },
      {
        text: 'Development',
        items: [
          { text: 'Contribute', link: 'development/contribute' },
          { text: 'Contributors', link: 'development/contributors' }
        ]
      }, {
        text: 'API',
        items: [
          { text: 'API Reference', link: 'api' },
        ]
      },
    ],
    editLink: {
      pattern: 'https://github.com/JuliaDataCubes/YAXArrays.jl/edit/master/docs/src/:path'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/JuliaDataCubes/YAXArrays.jl' }
    ],
    footer: {
      message: 'Made with <a href="https://github.com/LuxDL/DocumenterVitepress.jl" target="_blank"><strong>DocumenterVitepress.jl</strong></a>',
      copyright: `© Copyright ${new Date().getUTCFullYear()}. Released under the MIT License.`
    }
  }
})