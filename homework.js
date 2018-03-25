$(document).ready(function() {
    $.ajax({
        url:"cities.csv",
        dataType:"text",
        success:function(data) {
          var cities = data.split(/\r?\n|\r/);
          var table = '<table class="table table-bordered table-striped">';
          for (var count = 0; count < cities.length; count++) {
            var cell = cities[count].split(",");
            table += '<tr>';
            for (var cell_count=0; cell_count < cell.length; cell_count++) {
              if (count === 0) {
                table += '<th>' + cell[cell_count]+'</th>';
              } else {
                table += '<td>' + cell[cell_count]+'</td>';
              }
            }
            table += '</tr>';
          }
          table += '</table>';
          $('.cities-data').html(table);
        }
    });
});