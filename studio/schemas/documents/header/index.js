export default{
    name:'header',
    title:'Header',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'logo',
            title:'Logo',
            type:'custom_image'
        },
        {
            name:'nav_links',
            title:'Nav Links',
            type:'array',
            of:[{type:'label_link'}]
        },
        {
            name:'button',
            title:'Button',
            type:'button'
        },
        {
            name:'background_classname',
            title:'Background Classname',
            type:'string',
            options:{
                list:[{
                  title:'White',
                  value:'white'
                },
            {
                title:'Dark Gradient',
                value:'dark-gradient'
            },
            ]
              }
        }
    ]
}