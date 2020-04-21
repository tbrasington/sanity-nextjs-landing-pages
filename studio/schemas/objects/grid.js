export default {
  type: 'object',
  name: 'grid',
  title: 'Grid',
  fields: [
   {
    name : 'title',
    type : 'string',
    title: 'Grid area title'
   },
    {
      name: 'content',
      type: 'array',
      title: 'Blocks',
      of: [
        { type: 'hero' },
        { type: 'imageSection' },
        { type: 'mailchimp' },
        { type: 'textSection' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'heading'
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'grid section'
      };
    },
  },
};
