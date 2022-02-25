export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '621890e2fcb9db7244c949a8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nws6hnup',
                  apiId: '0eb0324c-2f2e-4fae-bfd8-33e540c56069'
                },
                {
                  buildHookId: '621890e26247887ceba971d1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6scttpk7',
                  apiId: 'b214a7ea-7e79-463b-b7a2-a131c0710aa2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/EmilNNoaIgnite/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6scttpk7.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
