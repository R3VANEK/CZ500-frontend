import React from 'react'
import Category_card from './category-card'
import Offer_card from './offer-card'
import './offers.css'

import {connect} from 'react-redux';
import {getOffers} from '../../actions/offerActions';
import PropTypes from 'prop-types';


class Offers extends React.Component{

     /************************* TO NIE REDUX ALE DOBRZE TO MIEĆ *************************/
    static propTypes = {
        getOffers: PropTypes.func.isRequired,
        offer:PropTypes.object
    }
     /************************* TO NIE REDUX ALE DOBRZE TO MIEĆ *************************/

    state={
        
        typesOfOffers : [
            {text : "Ubranka", picture : "ubranko.png"},
            {text : "Jedzenie", picture : "jedzenie.png"},
            {text : "Zabawki", picture : "zabawki.png"},
            {text : "Kosmetyki", picture : "kosmetyki.png"},
            {text : "Shrek", picture : "shrek.png"},
            {text : "Shrek 2" ,picture : "shrek2.png"}
        ],
        dummy_listOfOffers : [
            {id:0, itemName:'Adam 1', price:123, givenPrice:699, hots:50, imgUrl:"watch.jpeg", category:'Ubranka'},
                {id:1, itemName:'Rowerek 2', price:321, givenPrice:'', hots:0, imgUrl:"twarz.png", category:'Ubranka'},
                {id:2, itemName:'Rowerek 3', price:99, givenPrice:5, hots:666, imgUrl:"logo.png", category:'Ubranka'},
                {id:3, itemName:'Rowerek 4', price:999, givenPrice:1, hots:69, imgUrl:"share.png", category:'Ubranka'},
                {id:4, itemName:'Rowerek 5', price:5, givenPrice:699, hots:420, imgUrl:"item.png", category:'Ubranka'} ,
                {id:5, itemName:'Rowerek 6', price:444, givenPrice:699, hots:1337, imgUrl:"item.png", category:'Jedzenie'},
                {id:6, itemName:'Rowerek 7', price:9876, givenPrice:6469, hots:2137, imgUrl:"item.png", category:'Jedzenie'},
                {id:7, itemName:'Rowerek 8', price:123, givenPrice:699, hots:50, imgUrl:"watch.jpeg", category:'Jedzenie'},
                {id:8, itemName:'Rowerek 9', price:321, givenPrice:'', hots:0, imgUrl:"twarz.png", category:'Zabawki'},
                {id:9, itemName:'Gosia 10', price:199, givenPrice:5, hots:666, imgUrl:"logo.png", category:'Zabawki'},
                {id:10, itemName:'Rowerek 11', price:999, givenPrice:1, hots:69, imgUrl:"share.png", category:'Zabawki'},
                {id:11, itemName:'Rowerek 12', price:5, givenPrice:699, hots:420, imgUrl:"item.png", category:'Zabawki'} ,
                {id:12, itemName:'Rowerek 13', price:444, givenPrice:699, hots:1337, imgUrl:"item.png", category:'Zabawki'},
                {id:13, itemName:'Rowerek 14', price:9876, givenPrice:6469, hots:2137, imgUrl:"item.png", category:'Zabawki'},
                {id:14, itemName:'Rowerek 15', price:123, givenPrice:699, hots:50, imgUrl:"watch.jpeg", category:'Zabawki'},
                {id:15, itemName:'Rowerek 16', price:321, givenPrice:'', hots:0, imgUrl:"twarz.png", category:'Zabawki'},
                {id:16, itemName:'Rowerek 17', price:989, givenPrice:5, hots:666, imgUrl:"logo.png", category:'Zabawki'},
                {id:17, itemName:'Rowerek 18', price:909, givenPrice:1, hots:69, imgUrl:"share.png", category:'Kosmetyki'},
                {id:18, itemName:'Rowerek 19', price:1, givenPrice:699, hots:420, imgUrl:"item.png", category:'Kosmetyki'} ,
                {id:19, itemName:'Rowerek 20', price:434, givenPrice:699, hots:1337, imgUrl:"item.png", category:'Kosmetyki'},
                {id:20, itemName:'Rowerek 21', price:9876, givenPrice:6469, hots:2137, imgUrl:"item.png", category:'Kosmetyki'},
                {id:21, itemName:'Rowerek 22', price:124, givenPrice:699, hots:50, imgUrl:"watch.jpeg", category:'Kosmetyki'},
                {id:22, itemName:'Rowerek 23', price:321, givenPrice:'', hots:0, imgUrl:"twarz.png", category:'Kosmetyki'},
                {id:23, itemName:'Rowerek 24', price:999, givenPrice:5, hots:666, imgUrl:"logo.png", category:'Shrek'},
                {id:24, itemName:'Rowerek 25', price:990, givenPrice:1, hots:69, imgUrl:"share.png", category:'Shrek'},
                {id:25, itemName:'Rowerek 26', price:5, givenPrice:699, hots:420, imgUrl:"item.png", category:'Shrek'} ,
                {id:26, itemName:'Rowerek 27', price:444, givenPrice:699, hots:1337, imgUrl:"item.png", category:'Shrek'},
                {id:27, itemName:'Rowerek 28', price:9876, givenPrice:6469, hots:2137, imgUrl:"item.png", category:'Shrek 2'}
        ],

        typeOfOffer : null,  /* zmienne potrzebne przy wyborze ofert */
        sort1 : "itemName",
        sort2 : "min-max",
        sortedArray : null,
        showOffers : false,


    }

    componentWillMount(){
      
    /************************* REDUX *************************/
        this.props.getOffers();      
    /************************* REDUX *************************/

        this.setState({
            sortedArray : this.state.dummy_listOfOffers.sort((a,b)=>{
                if(a.itemName < b.itemName){
                    return -1
                }
                else if(a.itemName > b.itemName){
                    return 1
                }
                else{
                    return 0;
                }
            })
        })
    }

     sortOption = async(e) =>{
        if(e.target.id == "sort-1"){
            await this.setState({
                sort1 : e.target.value
            })
        }
        else if(e.target.id == "sort-2"){
           
             await this.setState({
                sort2 : e.target.value
            })
        }
        console.log(this.state.sort1 + " " + this.state.sort2)
        
        let Sorting = async(e) =>{
            if(this.state.sort1 == "itemName"){
                let helpArray = this.state.dummy_listOfOffers.sort((a,b)=>{
                    if(a.itemName < b.itemName){
                        return -1
                    }
                    else if(a.itemName > b.itemName){
                        return 1
                    }
                    else{
                        return 0;
                    }
                })
               await  this.setState({
                    sortedArray : helpArray
                })
                console.log(this.state.sortedArray)
                
            }
            else if(this.state.sort1 == "hots"){
                let helpArray = this.state.dummy_listOfOffers.sort((a,b)=>{
                    if(a.hots < b.hots){
                        return 1
                    }
                    else if(a.hots == b.hots){
                        return 0
                    }
                    else if( a.hots > b.hots){
                        return -1
                    }
                })
                await this.setState({
                    sortedArray : helpArray
                })
                console.log(this.state.sortedArray)
            }
            else if(this.state.sort1 = "price"){

                if(this.state.sort2 == "min-max"){
                    console.log("min-max")
                    let helpArray = this.state.dummy_listOfOffers.sort((a,b)=>{
                        if(a.price < b.price){
                            return -1
                        }
                        else if(a.price == b.price){
                            return 0
                        }
                        else if( a.price > b.price){
                            return 1
                        }
                    })

                    await this.setState({
                        sortedArray : helpArray
                    })
                    console.log(this.state.sortedArray)
                }
                else if(this.state.sort2 == "max-min"){
                    console.log("jestem w max-min")
                    let helpArray = this.state.dummy_listOfOffers.sort((a,b)=>{
                        if(a.price < b.price){
                            return 1
                        }
                        else if(a.price == b.price){
                            return 0
                        }
                        else if( a.price > b.price){
                            return -1
                        }
                    })
                    await this.setState({
                        sortedArray : helpArray
                    })
                    console.log(this.state.sortedArray)
                } 
            }
        }

        Sorting()
    }

    showOffers =  (e) =>{
        this.setState({
            typeOfOffer : e.target.getAttribute("for")
        })
    }

    

    render(){

    /************************* REDUX *************************/
        console.log(this.props.offers)
    /************************* REDUX *************************/

        const h1Text = (this.state.typeOfOffer === "") ?  /*tekst nagłówkowy */
        (
        <div className="line-under-text">Oferty dla Ciebie</div>
        ) : (
        <div className="line-under-text">Wybierz typ ofert</div>
        )

        const divCategories = this.state.typesOfOffers.map((category)=>{ /*lista divów z kategorią*/
            return(
                <Category_card text={category.text} picture={category.picture} showOffers={this.showOffers}/>
            )
        })

        const divOffers = (this.state.typeOfOffer !=null) ?
        (
            this.state.sortedArray.map((offer)=>{
                if(offer.category == this.state.typeOfOffer){
                return(
                    <Offer_card item={offer}/>
                )}
            })
        ) : 
        (
            this.state.sortedArray.map((offer)=>{
                return(
                    <Offer_card item={offer}/>
                )
            })
        )

        
            
       
        

        return(
            <main>
                <div className="big-container1">
                    <div className="big-container-inner">
                        <div className="user-family-title-box special">
                            <div className="user-family-title-box-text">
                                <h1>Witaj TwojeImię!</h1>
                                <h2>Oto oferty, które dla Ciebie przygotowaliśmy</h2>
                            </div>
                            <div className="user-family-title-box-img">
                                <button className="btn1"><i class="fas fa-user-cog icon"></i>ZMIEŃ KRYTERIA</button><br/>
                                <button className="btn1"><i class="fas fa-user-cog icon"></i>JAK TO DZIAŁA?</button>
                            </div>
                        </div>

                    {h1Text}

                        <div className="types-of-offer">
                            {divCategories}
                        </div>

                        <div className="sort-block">
                            <div className="sort first">
                                <div className="text" >Sortuj według:</div>
                                <div className="select">
                                    <select name="sort-1" id="sort-1" onChange={this.sortOption}>
                                        <option value="itemName">Nazwy</option>
                                        <option value="price">Ceny</option>
                                        <option value="hots">Popularności</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sort second" >
                                <div className="text">Cena:</div>
                                <div className="select">
                                    <select name="sort-2" id="sort-2" onChange={this.sortOption}>
                                        <option value="min-max">Rosnąco</option>
                                        <option value="max-min">Malejąco</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="container-offers">
                            {divOffers}
                        </div>   
                    </div>
                </div>
            </main>
        )
    }
    
}
 /************************* REDUX *************************/
const mapStateToProps = state => {
    return{
        offers: state.offer
    }  
}
 /************************* REDUX *************************/

 /************************* REDUX *************************/
export default connect(mapStateToProps, {getOffers})(Offers);
 /************************* REDUX *************************/