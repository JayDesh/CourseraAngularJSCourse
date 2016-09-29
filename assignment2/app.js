( function () {
    angular.module("ShoppingListCheckOff", [])
    .controller( 'ToBuyController', ToBuyController )
    .controller( 'AlreadyBoughtController', AlreadyBoughtController )
    .service( 'ShoppingListCheckOffService', ShoppingListCheckOffService );


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController ( ShoppingListCheckOffService ) {
      var vm = this;
      vm.toBuyItems = ShoppingListCheckOffService.getItems();

      vm.buy = function ( index ) {
        ShoppingListCheckOffService.buyItem ( index );
      }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController ( ShoppingListCheckOffService ) {
      var vm = this;
      vm.itemsBought = ShoppingListCheckOffService.getBoughtItems();

    }

    function ShoppingListCheckOffService () {
      var service = this,
        items = [
          {name:"eggs", quantity: '12' },
          {name:"milk", quantity: '1  gallon' },
          {name:"salads", quantity: '500' },
          {name:"apples", quantity: '1 dozen' },
          {name:"banannas", quantity: 6 }
        ],
        itemsBought =[];

      this.buyItem = function ( index ) {
        var itemBought = items[index];
        itemsBought.push( itemBought );
        service.removeItem(index);
      }

      this.getItems = function () {
        return items;
      }

      this.getBoughtItems = function () {
        return itemsBought;
      }

      this.removeItem = function ( index ) {
        items.splice( index, 1 );
      };
    }
})();
