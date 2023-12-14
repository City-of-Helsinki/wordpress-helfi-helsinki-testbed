import classnames from 'classnames'
import '@wordpress/edit-post';
import domReady from '@wordpress/dom-ready';
import {
  unregisterBlockStyle,
  registerBlockStyle,
} from '@wordpress/blocks';
import { createHigherOrderComponent} from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

import './editor/blocks/icon-and-text';
import './editor/blocks/highlight';

/**
 * Forces image fill for Media & Text blocks with the hover style.
 */
const withForcedImageFill = createHigherOrderComponent(BlockListBlock => {
  return (props) => {
    if (
      props.name === 'core/media-text' &&
      props.attributes.className &&
      props.attributes.className.indexOf('is-style-hover') !== -1
    ) {
      props.attributes.imageFill = true;
    }
    return <BlockListBlock { ...props } />;
  };
}, 'withForcedImageFill' );
/**
 * Forces a default background color for Media & Text blocks with the hover
 * style.
 */
const withDefaultBackgroundColor = createHigherOrderComponent(BlockListBlock => {
  return (props) => {
    if (
      props.name === 'core/media-text' &&
      props.attributes.className &&
      props.attributes.className.indexOf('is-style-hover') !== -1 &&
      !props.attributes.backgroundColor
    ) {
      props.attributes.backgroundColor = 'c-kupari-kupari-light-20';
    }
    return <BlockListBlock { ...props } />;
  };
}, 'withDefaultBackgroundColor' );
/**
 * Sets outline as default style for buttons.
 */
const withDefaultButtonStyle = createHigherOrderComponent(BlockListBlock => {
  return (props) => {
    if (
      props.name === 'core/button' &&
      (
        !props.attributes.className ||
        props.attributes.className.indexOf('is-style') === -1
      )
    ) {
      props.attributes.className = classnames(
        props.attributes.classname,
        'is-style-outline'
      )
    }
    return <BlockListBlock { ...props } />;
  };
}, 'withDefaultButtonStyle' );
/**
 * Sets default color for buttons with outline style.
 */
const withDefaultColor = createHigherOrderComponent(BlockListBlock => {
  return (props) => {
    if (
      props.name === 'core/button' &&
      props.attributes.className &&
      props.attributes.className.indexOf('is-style-outline') !== -1 &&
      !props.attributes.textColor
    ) {
      props.attributes.textColor = 'dark-grey';
    }
    return <BlockListBlock { ...props } />;
  };
}, 'withDefaultColor' );
/**
 * Removes border radius from buttons.
 */
const withRemoveBorderRadius = createHigherOrderComponent(BlockListBlock => {
  return (props) => {
    if (
      props.name === 'core/button'
    ) {
      props.attributes.borderRadius = undefined;
    }
    return <BlockListBlock { ...props } />;
  };
}, 'withRemoveBorderRadius' );
/**
 * Ensures that Group Block is set to full align if it has any koro style.
 */
const withAlignFullKoroStyles = createHigherOrderComponent(BlockListBlock => {
  return (props) => {
    if (
      props.name === 'core/group' &&
      props.attributes.className &&
      props.attributes.className.indexOf('is-style-koro') !== -1 &&
      props.attributes.align !== 'full'
    ) {
      props.attributes.align = 'full'
    }
    return <BlockListBlock { ...props } />;
  };
}, 'withAlignFullKoroStyles' );

var excludeBlockTypes = [
  'core/archives',
  'core/calendar',
  'core/categories',
  'core/latest-posts',
  'core/navigation',
  'core/nextpage',
  'core/latest-comments',
  'core/more',
  'core/rss',
  'core/search',
  'core/social-links',
  'core/table',
  'core/tag-cloud',
  'core-embed/amazon-kindle',
  'core-embed/animoto',
  'core-embed/cloudup',
  'core-embed/collegehumor',
  'core-embed/crowdsignal',
  'core-embed/dailymotion',
  'core-embed/facebook',
  'core-embed/flickr',
  'core-embed/hulu',
  'core-embed/imgur',
  'core-embed/instagram',
  'core-embed/issuu',
  'core-embed/kickstarter',
  'core-embed/meetup-com',
  'core-embed/mixcloud',
  'core-embed/polldaddy',
  'core-embed/reddit',
  'core-embed/reverbnation',
  'core-embed/screencast',
  'core-embed/scribd',
  'core-embed/slideshare',
  'core-embed/smugmug',
  'core-embed/soundcloud',
  'core-embed/speaker',
  'core-embed/speaker-deck',
  'core-embed/spotify',
  'core-embed/ted',
  'core-embed/tiktok',
  'core-embed/tumblr',
  'core-embed/twitter',
  'core-embed/videopress',
  'core-embed/vimeo',
  'core-embed/wordpress',
  'core-embed/wordpress-tv',
  'core-embed/youtube',
];
wp.hooks.addFilter('blocks.registerBlockType', 'pw-examples/exclude-blocks', function(settings, name) {
  if (excludeBlockTypes.indexOf(name) !== -1) {
      return Object.assign({}, settings, {
          supports: Object.assign({}, settings.supports, {inserter: false}),
      });
  }
  return settings;
});

function getBackgroundShapeBlockList (BlockListBlock) {
  return (props) => {
    return (
      <BlockListBlock {...props} />
    )
  }
}
addFilter(
  'editor.BlockListBlock',
  'hds/print-block-list',
  createHigherOrderComponent(getBackgroundShapeBlockList)
)

domReady(() => {
  unregisterBlockStyle('core/button', 'fill');
  registerBlockStyle('core/button', {
    name: 'outline',
    label: 'Outline',
    isDefault: true,
  });

  registerBlockStyle('core/media-text', {
    name: 'default',
    label: 'Default',
    isDefault: true,
  });
  registerBlockStyle('core/media-text', {
    name: 'hover',
    label: 'Hover',
  });
  registerBlockStyle('core/media-text', {
    name: 'hover-full',
    label: 'Hover full width',
  });

  registerBlockStyle('core/group', {
    name: 'default',
    label: 'Default',
  });
  registerBlockStyle('core/group', {
    name: 'koro-top-basic',
    label: 'Basic koro top',
  });
  registerBlockStyle('core/group', {
    name: 'koro-top-pulse',
    label: 'Pulse koro top',
  });

  addFilter(
    'editor.BlockListBlock', 'sage/with-forced-image-fill',
    withForcedImageFill
  );
  addFilter(
    'editor.BlockListBlock', 'sage/with-default-background-color-fill',
    withDefaultBackgroundColor
  );
  addFilter(
    'editor.BlockListBlock', 'sage/with-default-color',
    withDefaultColor
  );
  addFilter(
    'editor.BlockListBlock', 'sage/with-remove-border-radius',
    withRemoveBorderRadius
  );
  addFilter(
    'editor.BlockListBlock', 'sage/with-default-button-style',
    withDefaultButtonStyle
  );
  addFilter(
    'editor.BlockListBlock', 'sage/with-alignfull-koro-styles',
    withAlignFullKoroStyles
  );
});
