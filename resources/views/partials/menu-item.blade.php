@php $level = $level ?? 1 @endphp
<li class="
  {{ $name }}__item
  {{ $item->classes ?? '' }}
  {{ ($item->active || $item->activeAncestor) ? 'is-active': '' }}
  {{ $item->children ? 'has-children' : '' }}
  {{ "is-level-$level" }}"
  aria-haspopup="true"
  aria-expanded="false"
  aria-label="{{ esc_attr($item->label) }}"
  role="none"
>
  <a
    href="{{ $item->url }}"
    target="{{ $item->target ?? '' }}"
    title="{{ $item->title ?? '' }}"
    class="{{ $name }}__link {{ ($item->active || $item->activeAncestor) ? 'is-active': '' }}"
    role="menuitem"
  >
    {!! esc_html($item->label) !!}

    @if ($item->children)
      <span class="{{ $name }}__submenu-trigger has-angle-down-icon" aria-hidden="true"></span>
    @endif
  </a>

  @if ($item->children)
    <ul
      id="submenu-{{ $item->slug }}" class="{{ $name }}__submenu {{ $item->active ? 'is-active' : '' }}"
      aria-label="{!! esc_attr($item->label) !!}"
      role="menu"
    >
      @foreach ($item->children as $child)
        @include('partials.menu-item', ['item' => $child, 'name' => $name, 'level' => $level + 1])
      @endforeach
    </ul>
  @endif
</li>
