$(function() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const newItem = $(this).find('input[name="shopping-list-entry"]').val();
        const item = [];
        item.push($(`<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`));
        $(".shopping-list").append(item);
        $('#shopping-list-entry').val('');
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(){
      
        $(this).closest('li').remove();
        });
  
        
        $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
          $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
        });

  });


  


 

    






