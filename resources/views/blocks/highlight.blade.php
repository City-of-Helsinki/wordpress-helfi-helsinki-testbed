<div class="{{ esc_attr($block->classes) }}">
    <div class="wp-block-hds-highlight__columns">
        <div class="wp-block-hds-highlight__column icon-column">
            @if ($iconName)
                <div class="wp-block-hds-highlight__icon has-{!! $iconName !!}-icon has-{!! $iconColor !!}-color">
                </div>
            @endif
        </div>
        <div class="wp-block-hds-highlight__column body-column">
            @if ($heading)
                <h2 class="wp-block-hds-highlight__heading has-{!! $textColor !!}-color">
                    {!! wp_kses_post($heading) !!}
            </h2>
            @endif
            @if ($body)
                <div class="wp-block-hds-highlight__body has-{!! $textColor !!}-color">
                    {!! wp_kses_post($body) !!}
                </div>
            @endif
        </div>
        <div class="wp-block-hds-highlight__column button-column">
            @if ($linkText)
                <div class="wp-block-button is-style-outline wp-block-hds-highlight__button">
                    <a class="wp-block-button__link has-{!! $textColor !!}-color" href="{{ $linkUrl }}">
                        {{ $linkText }}
                    </a>
                </div>
            @endif
        </div>
    </div>
</div>
