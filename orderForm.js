let sizePrice = 0;
let meatTotal = 0;
let veggieTotal = 0;


$(document).ready(function () {


    $(".nav-link").click(showTab);
    $("input[name=size]").change(displaySize).first().change();
    $("input[name=crust]").change(displayCrust).first().change();
    $("input[name=meat]").change(displayMeat);
    $("input[name=veggie]").change(displayVeggie);
    $("input[name=deliveryInfo]").change(displayDelivery);
    $(".btn-primary").click(calculation);
    $("#submit").click(submit);




    $('.btnNext').click(function () {
        $('.nav-tabs .active').parent().next('li').find('a').trigger('click');
    });

    $('.btnPrev').click(function () {

        $('.nav-tabs .active').parent().prev('li').find('a').trigger('click');
    });

    $('.submit').click(function () {
        $('#submit .active').parent().find('a').trigger('click');


    });
    function showTab(event) {
        event.preventDefault();
        $(this).tab("show");

    }

    function displaySize() {

        let checkedSize = $("input[name=size]:checked").val();
         sizePrice = $(this).data("price");

        //output
        $("#size").text(checkedSize);
        $("#sizePriceOutput").text(sizePrice.toFixed(2));

    }

    function displayCrust() {

        let selectedCrust = $("input[name=crust]:checked").val();
        $("#crustTypeOutput").text(selectedCrust);
    }

    function displayMeat() {
        let meatType = " ";
        meatTotal = 0;

        let selectedMeat = $("input[name=meat]:checked");

        selectedMeat.each(function () {
            meatTotal += $(this).data("price");
            meatType += $(this).val();
            meatType += ", ";

        })
        $("#meatTypeOutput").html(meatType);
        $("#meatsPriceOutput").text(meatTotal.toFixed(2));
    }

    function displayVeggie()
    {

        let veggieType = "";
        veggieTotal = 0;

        let selectedVeggies = $("input[name=veggie]:checked");

        selectedVeggies.each(function () {
            veggieTotal += $(this).data("price");
            veggieType += $(this).val();
            veggieType += ", ";
        })


        $("#veggiesOutput").text(veggieType);
        $("#veggieTypeOutput").text(veggieTotal.toFixed(2));
        }

    function displayDelivery() {
        let deliveryInfo = "";

        let checkedDelivery = $("input[name=deliveryInfo]");
        checkedDelivery.each(function () {

         $("input[name=deliveryInfo]")
            deliveryInfo += $(this).val();
            deliveryInfo += "<br>";


        })

        $("#deliveryOutput").html(deliveryInfo);
    }

    function calculation() {

    let subTotal = sizePrice + meatTotal + veggieTotal;
    let salesTax = subTotal * 0.051;
    let deliveryFee = 2;
    let total = subTotal + salesTax + deliveryFee;

        $("#subTotalOutput").text(subTotal.toFixed(2));
        $("#salesTaxOutput").text(salesTax.toFixed(2));
        $("#deliveryFeeOutput").text(deliveryFee.toFixed(2));
        $("#totalOutput").text(total.toFixed(2));
    }

    function submit(){
        $("#submit").prompt(`Your order is on it's way!`)  /*check*/
    }

});




// }
//     /*determine pizza size*/
//     //if user selects small
//     let sizeSmall = $("input#small").is(":checked");
//
//     //if user selects medium
//     let sizeMedium = $("input#medium").is(":checked");
//     //if user selects large
//     let sizeLarge = $("input#large").is(":checked");
//
//     /*determine crust style*/
//
//
//     //if user selects thin
//     let crustThin = $("input#thin").is(":checked");
//     //if user selects pan
//      let crustPan = $("input#pan")
//     //if user selects gluten free
//
//
//
// }


/*user selects meat toppings*/


/*user selects veggie toppings*/


/*user inputs delivery personal information:
Name + last name
Address
Phone Number*/


/*display order confirmation: pizza order details and customer info*/


/*display subtotal*/


/*display calculated tax (5.1%)*/


/*display delivery fee ($2)*/


/*display grand total (subtotal + tax + $2) with to.Fixed(2)*/
