import {registerBlockType} from '@wordpress/blocks'
import {__} from '@wordpress/i18n'

import edit from './edit'
import {save} from './save'
import {name, category, attributes} from './block.json'

registerBlockType(name, {
  title: __('Icon & Text', 'hds'),
  description: __('Display an icon and text', 'hds'),
  category,
  parent: null,
  supports: {
    align: false,
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
