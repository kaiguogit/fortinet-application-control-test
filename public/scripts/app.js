$(() => {

  //https://datatables.net/examples/styling/bootstrap.html
  //Datatable plugin
  $('#signatures').DataTable({
    "ajax": '/api/data'
  });


  $signatureLength_wrapper = $('#signatures_length').parent().get( 0 )
  $signaturesFilter_wrapper = $('#signatures_filter').parent().get( 0 )
  $($signaturesFilter_wrapper).after($($signatureLength_wrapper))
 
});
