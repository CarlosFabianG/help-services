import React, { createContext, Component } from 'react'
import { withRouter } from 'react-router-dom'
import AUTH_SERVICE from './services/auth'
import axios from 'axios'
export const MyContext = createContext()
const api_key = 'DrcSCtjf4UWodf1lxDoID7v21R3ElIbbXhIpBG2iCxXjgIpi-ujG4J7gwrNjeQNYwizW0VRhlSD9YgHb1uacJd7m1JHE2uZpc6nR-l6IeJqMBKPvRs3g69XgVfPOXXYx'
class MyProvider extends Component {
  state = {
    formSignup: {
      name: '',
      email: '',
      password: ''
    },
    formLogin: {
      email: '',
      password: ''
    },
    business:  {
      imageUrl: '',
      name: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      category: '',
      rating:'',
      reviewCount:''
    },
    searchbar:{
      term: '',
      location: '',
      sortBy: ''
    },
    businesses: [],
    loggedUser: null,
    isLogged: false
  }
  Yelpsearch(term,location){
      return axios(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,{headers:{Authorization:`Bearer ${api_key}`}})
      .then(({data: jsonResponse} )=> {
        if(jsonResponse.businesses) {
          console.log(jsonResponse);
          
            return jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_Code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_Count

                }
            })
        }
    })
}

async componentDidMount(){
  this.Yelpsearch()
    }
  
searchYelp = (term,location,sortBy) => {
      this.Yelpsearch(term,location,sortBy).then(businesses => {
        this.setState({businesses:businesses})
      })
 }


handleSearchBarInputs = (e, obj) => {
    const { name, value } = e.target
    console.log('aqui');
    
    
     this.setState(prev =>({
       ...prev,
       searchbar:{
        ...prev.searchbar,
        [name]: value
       }
     }))
   

   }

handleLocationSearchBarInput = (e,obj) => {
  const { name, value } = e.target
     obj[name] = value
  this.setState({ obj })
}

handleSearchEvent = (e, obj) => {

  this.Yelpsearch( this.state.searchbar.term, this.state.searchbar.location)
}


  handleLogout = async () => {
    await AUTH_SERVICE.LOGOUT()
    this.props.history.push('/')
    this.setState({ loggedUser: null, isLogged: false })
  }
  //Esta función destructura de el estado la form para poder acceder a
  //a sus key value pairs.
  //Destructuramos la key y su valor de element y con . target lo 
  //obtenemos.
  //A formSignUp en su llave name le damos el valor que pasa en value del
  //e.target
  //Se actualiza el estado al final.
  handleSignupInput = e => {
    const { formSignup } = this.state
    const { name, value } = e.target
    formSignup[name] = value
    this.setState({ formSignup })
  }
  //Esta función destructura de el estado la form para poder acceder a
  //a sus key value pairs.
  //Destructuramos la key y su valor de element y con . target lo 
  //obtenemos.
  //A formLogin en su llave name le damos el valor que pasa en value del
  //e.target
  //Se actualiza el estado al final.
  handleLoginInput = e => {
    const { formLogin } = this.state
    const { name, value } = e.target
    formLogin[name] = value
    this.setState({ formLogin })
  }
  //La funcion asincrona recibe un evento; lo primero que hace es evitar la recarga 
  //de pagina con preventDefault. En seguida en una constante llamada form guardamos 
  //el state que actualizamos en la funcion handleSignUpInput. Despues limpiamos la informacion del signup
  //para terminar pasamos nuestra constante form a AUTH_SERVICE para mandar esa info al servidor. 
  handleSignupSubmit = async e => {
    e.preventDefault()
    const form = this.state.formSignup
    this.setState({ formSignup: { name: '', email: '', password: '' } })
    return await AUTH_SERVICE.SIGNUP(form)
  }
//
  handleLoginSubmit = e => {
    e.preventDefault()
    const form = this.state.formLogin
    return AUTH_SERVICE.LOGIN(form)
      .then(({ user }) => {
        this.setState({
          loggedUser: user,
          isLogged: true
        })
        return { user, msg: 'logged' }
      })
      .catch(err => {
        this.setState({
          loggedUser: null,
          isLogged: false,
          formLogin: { email: '', password: '' }
        })
        return { user: null, msg: 'Invalid username/password.' }
      })
      .finally(() => this.setState({ formLogin: { email: '', password: '' } }))
  }
  render() {
    const {
      state,
      handleSignupInput,
      handleSignupSubmit,
      handleLoginInput,
      handleLoginSubmit,
      handleLogout,
      handleTermSearchBarInput,
      handleLocationSearchBarInput,
      handleSearchEvent,
      searchYelp,
      handleSearchBarInputs
    } = this
    return (
      <MyContext.Provider
        value={{
          state,
          handleSignupInput,
          handleSignupSubmit,
          handleLoginInput,
          handleLoginSubmit,
          handleLogout,
          handleTermSearchBarInput,
          handleLocationSearchBarInput,
          handleSearchEvent,
          searchYelp,
          handleSearchBarInputs
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
export default withRouter(MyProvider)