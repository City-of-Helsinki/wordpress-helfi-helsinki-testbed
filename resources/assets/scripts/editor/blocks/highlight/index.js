import {registerBlockType} from '@wordpress/blocks'
import {__} from '@wordpress/i18n'

import edit from './edit'
import {save} from './save'
import {name, category, attributes} from './block.json'

registerBlockType(name, {
  title: __('Highlight', 'hds'),
  description: __('Display a highlight', 'hds'),
  category,
  parent: null,
  supports: {
    align: ['wide', 'full'],
    alignWide: false,
    customClassName: true,
    html: false,
    inserter: true,
    multiple: true,
    reusable: false,
  },
  attributes,
  edit,
  save,
})
