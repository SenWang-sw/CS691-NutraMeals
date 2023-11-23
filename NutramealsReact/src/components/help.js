import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import './help.css';
import image from './helpBackground.jpg';

function Help(props) {
    const data = {
        rows: [
            {
                title: "How do I order?",
                content: `You enter your address and click “Search.” You’ll see a list of restaurants delivering to you, along with nearby pickup options. Click the one you’re into, do the same for anything you’re feeling on its menu and hit “Proceed to Checkout.”Do that
                whole “ordering something on the Internet” checkout thing and we’ll notify the restaurant to begin prepping your food. Done.`,
            },
            {
                title: "What happens after I submit an order?",
                content:
                    "We send your order to the restaurant as soon as you hit the button. The restaurant tells us they’re working on the order, we email you a receipt and text you a confirmation.",
            },
            {
                title: "Something is wrong with my food. What do I do?",
                content: `If there’s a problem with your order, please call the restaurant and let them know. You can find that phone number in your order confirmation email.Of course, you can reach out to our Customer Care Team on customersupport@NutraMeal.com. We’re
                 around 24/7 to fix these things. `,
            },
            {
                title: "Is there a minimum amount I have to spend to order?",
                content: "In some cases, yes. Restaurants often require a minimum order size to deliver an order.",
            },
            {
                title: "Can I save my payment information?",
                content: "No, During checkout, you’ll have the opportunity to enter a credit card",
            },
        ],
    };

    const styles = {
        //bgColor: 'transparent',
        titleTextColor: "green",
        rowTitleColor: "blue",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };

    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <div>
        <div>
        <img src={image} alt="" className="backimage"></img>
        <div className="centered">FAQs</div>
        </div>
        <div className="outer">
        <div className="main">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
        </div>
        </div>
    );
}
// function Help(props) {
    
//     return(
                
//             // <Fragment>
//             //         <core.Container maxWidth="lg" classNameName="messageContainer" style={{ position: 'absolute',top: '12%',left: '6%'}}>
//             //                 <core.Paper
//             //                         elevation={5}
//             //                         classNameName="mainContainer"
//             //                         color="primary.main">
//             //                         <core.Container maxWidth="lg" classNameName="messageContainer">
                                
//             //                         <div>
//             //                             <h2>How do I order?</h2>
//             //                             <p>You enter your address and click “Search.” You’ll see a list of restaurants delivering to you, along with nearby pickup options. Click the one you’re into, do the same for anything you’re feeling on its menu and hit “Proceed to Checkout.”Do that
//             //                                 whole “ordering something on the Internet” checkout thing and we’ll notify the restaurant to begin prepping your food. Done. </p>
//             //                         </div>

//             //                         <div>
//             //                             <h2>What happens after I submit an order?</h2>
//             //                             <p>We send your order to the restaurant as soon as you hit the button. The restaurant tells us they’re working on the order, we email you a receipt and text you a confirmation. </p>
//             //                         </div>

//             //                         <div>
//             //                             <h2>Something is wrong with my food. What do I do?</h2>
//             //                             <p>If there’s a problem with your order, please call the restaurant and let them know. You can find that phone number in your order confirmation email.Of course, you can reach out to our Customer Care Team on customersupport@NutraMeal.com. We’re
//             //                                 around 24/7 to fix these things. </p>
//             //                         </div>

//             //                         <div>
//             //                             <h2>Is there a minimum amount I have to spend to order?</h2>
//             //                             <p>In some cases, yes. Restaurants often require a minimum order size to deliver an order. </p>
//             //                         </div>

//             //                         <div>
//             //                             <h2> Can I save my payment information?</h2>
//             //                             <p>No, During checkout, you’ll have the opportunity to enter a credit card</p>
//             //                         </div>

                                
//             //                         </core.Container>
//             //                     </core.Paper>
//             //             </core.Container>
//             //     </Fragment>
//         );
    
// }

export default Help;