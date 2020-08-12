export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f33ae601358b8307bca961a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-m17erh2d',
                  apiId: '0e1f5135-0c8a-4555-a5b7-84c56e8c7b71'
                },
                {
                  buildHookId: '5f33ae6184171ad9b3c0aece',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ogxjucai',
                  apiId: '9b85d447-b638-4da5-bc99-a8abc0165d3a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shane-dyer/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ogxjucai.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
