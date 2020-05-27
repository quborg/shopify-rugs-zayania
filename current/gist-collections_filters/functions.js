if($('#collection-filter').length) {
  (function() {
    var lists = {};

    $('.products .product').each(function(){
      // gather array data set with liquid on each product li in collection.liquid
      lists.colours = $(this).data('colours').split(',');
      lists.materials = $(this).data('materials').split(',');
      lists.styles = $(this).data('styles').split(',');
      lists.recommended = $(this).data('tags').split(',');
      // push to the filter arrays
      filters.populateLists(lists)
    })
    // once finished update the display with all the filter options
    .promise().done(function() {
    	filters.populateElements();
    });

    // initialize collection filtering
    window.collection = new Collection( $('.products .product'), {price: '.price'} );
    collection
    	.set_message_empty('<li><p>Sorry. Nothing was found.</p></li>')
    	.set_pagesize(30)
    	.set_ui_paging( $('.pagination .pages') )
      .set_ui_prevpage( $('.pagination .prev') )
      .set_ui_nextpage( $('.pagination .next') )
    	.display()
    ;

    // add the event handlers for the different filter option elements
    // price slider
    $('.ui-slider').on('slidechange', function(event, ui){
      filters.priceMin = ui.values[0];
      filters.priceMax = ui.values[1];
      filters.resort();
    });

    // price high/low
    $(filters.priceElement).on('change', function () {
      filters.sort = $(this).val();
      filters.resort();
    });

    // paginate select
    $(filters.paginateElement).on('change', function () {
      filters.paginate = +$(this).val();
      filters.resort();
    });

    // other options - colours, materials, recommended and styles
    $('.filter-data input[type=checkbox]').change(function(){
      filters.resort();
    });

  })();
}