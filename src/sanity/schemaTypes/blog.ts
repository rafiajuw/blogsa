import { defineField,defineType } from "sanity"


export const blog =defineType( {
    name: 'blog',
    type: 'document',
    title: 'blog',

    fields: [
      defineField(
        {
            name: 'Title',
            type: 'string',
            title: 'Title'
        }),

        {
            name: 'paragraph',
            type: 'text',
            title: 'paragraph'
        },

    
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source:'name'
            }
        },
        defineField({
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            title: 'Block',
            name:'block',
            type: 'array',
            of: [{type:'block'}]
        })
        
              
            
    ]})