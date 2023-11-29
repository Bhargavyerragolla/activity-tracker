

function calculateSum()


{
    // Get the values from the elements
    var rateValue = parseInt(document.querySelector('.rate').innerText);
    var rate1Value = parseInt(document.querySelector('.rate1').innerText);
    var rate2Value = parseInt(document.querySelector('.rate2').innerText);
    var rate3Value = parseInt(document.querySelector('.rate3').innerText);

    // Calculate the sum
    var sum = (rateValue + rate1Value + rate2Value + rate3Value)/4;

    // Update the number displayed on the page
    document.querySelector('.sizee').innerHTML = sum;
var resultt=' you are not on top 65% of  people who have taken these tests';

var restt='bad';
    if(sum<60){
        document.querySelector('.para').innerHTML=resultt
        document.querySelector('.taggs').innerHTML=restt

    }




    

}
