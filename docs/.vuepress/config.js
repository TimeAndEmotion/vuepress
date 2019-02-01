module.exports = {
  title: 'Zachiavelli',
  base: '/blocs/_blog/',
  themeConfig: {
    sidebar: [
      {
        title: 'Climate',
        collapsable: true,
        children: [
          '/climate-change',
          '/BAFort',
          '/Leverage',
          '/integration',
        ],
      },
      {
        title: 'Brain model surgery',
        collapsable: true,
        children: [
          '/brain-model-surgery',
          '/new-model-brainy',
          '/polyvagal',
          '/brain-waves',
          '/psychological-contract',
          '/mas-you-like-it',
        ]
      },
      {
        title: 'Aesthetics for commerce',
        collapsable: true,
        children: [
          '/schopenhauer',
          '/narrative-arcs',
          '/dramatic-arcs',
          '/three-methods',
          '/acting',
          '/direction',
          '/gravitas',
          '/tenets',
          '/training-for-scale',
          '/wokflow',
          '/groan-up',
          '/kool-aid-agile-test',
          '/lean-scenes',
        ]
      },
      {
        title: 'Value Driven Design',
        collapsable: true,
        children: [
          '/shape-of-things-to-come',
          '/sddv',
          '/sddv-1',
          './suzuki-training.md',
          './team-tightness',
          '/value-stream-blueprint',
          'A4',
          '/a-star'
        ]
      // '/FluidArchitecture',
      }

    ]
  }
}