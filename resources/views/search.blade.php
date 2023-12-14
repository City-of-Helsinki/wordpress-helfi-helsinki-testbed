@extends('layouts.app')

@section('content')
  <header class="entry-header">
    <h1 class="entry-title">{!! $title !!}</h1>

    <h4>{{ sprintf(__('For search: %s', 'helsinki-testbed'), get_search_query()) }}</h4>
  </header>


  <div class="entry-content">

    <x-group align="wide">
      @if (!have_posts())
        <x-alert type="warning">
          {!! __('Sorry, no results were found.', 'sage') !!}
        </x-alert>
      @endif
    </x-group>

    <x-group align="wide" id="listing">
      <div class="alignwide">
        <div class="grid">
          @while(have_posts()) @php(the_post())
            <div class="cell">
              @include('partials.content-search')
            </div>
          @endwhile
        </div>
      </div>
    </x-group>

    @include('partials.pagination', ['fragment' => 'listing'])
  </div>
@endsection
