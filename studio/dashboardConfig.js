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
                  buildHookId: '5e9f396e95ede47a3f790f21',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-k255sjzw',
                  apiId: 'c134a7c7-1362-4043-a3e6-2a15e9815b19'
                },
                {
                  buildHookId: '5e9f396f2d59188a0b97fd00',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tthbkd6z',
                  apiId: '48edd1bb-7ca3-42c4-869d-72616bca2cc4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tbrasington/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tthbkd6z.netlify.app', category: 'apps'}
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
