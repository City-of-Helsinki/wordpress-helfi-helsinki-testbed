<div class="{{ esc_attr($block->classes) }}">
    @if ($iconName)
        <div class="wp-block-hds-icon-and-text__icon has-{!! $iconName !!}-icon has-{!! $iconColor !!}-color">
        </div>
    @endif
    @if ($heading)
        <div class="wp-block-hds-icon-and-text__heading has-{!! $textColor !!}-color">
            {!! wp_kses_post($heading) !!}
        </div>
    @endif
    @if ($body)
        <div class="wp-block-hds-icon-and-text__body has-{!! $textColor !!}-color">
            {!! wp_kses_post($body) !!}
        </div>
    @endif
</div>
