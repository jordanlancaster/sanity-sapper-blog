export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '61380637ba34c325c83ab9b4',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-3bubdgsr',
                  apiId: '3bed8605-fb14-4179-bff6-c198344169f5'
                },
                {
                  buildHookId: '61380637ec98ff1f16705efb',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-r43f1x43',
                  apiId: 'af79727c-6e9e-4b6a-9e33-da40be734a9f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jordanlancaster/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-r43f1x43.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
