module.exports = {
  title: 'Zachiavelli',
  base: '/blocs/_blog/',
  themeConfig: {
    sidebar: [
      {
        title: 'Climate',
        collapsable: true,
        children: [
          './senge',
          '/BAFort',
          '/climate-change',
          '/integration',
        ],
      },
      {
        title: 'SALVe',
        collapsable: true,
        children: [
          '/estimation',
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
          '/mas-you-dont-like-it',
          '/dementia',
        ]
      },
      {
        title: 'Commercial aesthetics',
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
      }
    ]
  }
}