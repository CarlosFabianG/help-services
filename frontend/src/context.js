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
      phone:'',
      city: '',
      state: '',
      zipCode: '',
      category: '',
      rating:'',
      reviewCount:''
    },
    formBusiness: {
      name: '',
      imageURL: '',
      category: '',
      address:'',
      phone: ''
    },
    searchbar:{
      term: '',
      location: '',
      sortBy: ''
    },
    businesses: [],
    myBusinesses:[],
    loggedUser: null,
    isLogged: false
  }
  Yelpsearch(term,location){
      return axios(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,{headers:{Authorization:`Bearer ${api_key}`}})
      .then(({data: jsonResponse} )=> {
        if(jsonResponse.businesses) {
          console.log(jsonResponse);
          this.setState({business: jsonResponse})
            // return jsonResponse.businesses.map(business => {
            //     return {
            //         id: business.id,
            //         imageSrc: business.image_url,
            //         name: business.name,
            //         address: business.address1,
            //         city: business.location.city,
            //         state: business.location.state,
            //         zipCode: business.location.zip_Code,
            //         category: business.categories[0].title,
            //         rating: business.rating,
            //         reviewCount: business.review_Count

            //     }
            // })
        }
    })
}

//async componentDidMount(){
 // this.Yelpsearch()
 //   }


 componentDidMount = async () => {
  let { businesses } = await AUTH_SERVICE.getAllMyBusiness()
  this.setState(prevstate => ({
    ...prevstate,
    myBusinesses: businesses
  }))
}
  

getMyBusinesses =  async () => {
  let { businesses } = await AUTH_SERVICE.getAllMyBusiness()
  
  this.setState(prevstate => ({
    ...prevstate,
    myBusinesses: businesses
  }))
}

 uploadPhoto = e => {
   const formPhoto = new FormData()
   formPhoto.append('photoUrl', e.target.files[0])
   AUTH_SERVICE.uploadPhoto(formPhoto)
   .then(({data}) => {
     this.setState({ loggedUser: data.user})
   })
   .catch(err => {
     return err
   })
 }

 uploadImage = e => {
  const formImage = new FormData()
  formImage.append('imageURL', e.target.files[0])
  AUTH_SERVICE.uploadImage(formImage)
    .then(({ data }) => {
      this.setState({ business: data.business })
    })
    .catch(err => {
      return err
    })
}

 handleCreateBusiness = e => {
   let {name, value, type, files} = e.target
   value= (type === 'file') ? files[0]: value
   this.setState(prevstate => ({
     ...prevstate,
     formBusiness: {
       ...prevstate.formBusiness,
       [name]: value
     }
   }))
 }

 handleCreateBusinessSubmit = async e => {
   e.preventDefault()
   const formData = new FormData()
   formData.append('name', this.state.formBusiness.name)
   formData.append('imageURL', this.state.formBusiness.imageURL)
    formData.append('category', this.state.formBusiness.category)
    formData.append('address', this.state.formBusiness.address)
    formData.append('phone', this.state.formBusiness.phone)
    await AUTH_SERVICE.CREATE(formData)
    return this.setState({ 
      formBusiness: {
        imageURL: '',
        name: '',
        category: '',
        address: '',
        phone: ''
    }})
 }

searchYelp = (term,location,sortBy) => {
      this.Yelpsearch(term,location,sortBy).then(businesses => {
        this.setState({businesses:businesses})
      })
 }


handleSearchBarInputs = (e, obj) => {
    const { name, value } = e.target
    
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
  
  handleSignupInput = e => {
    const { formSignup } = this.state
    const { name, value } = e.target
    formSignup[name] = value
    this.setState({ formSignup })
  }
  
  handleLoginInput = e => {
    const { formLogin } = this.state
    const { name, value } = e.target
    formLogin[name] = value
    this.setState({ formLogin })
  }
  
  handleSignupSubmit = async e => {
    e.preventDefault()
    const form = this.state.formSignup
    this.setState({ formSignup: { name: '', email: '', password: '' } })
    return await AUTH_SERVICE.SIGNUP(form)
  }

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
      handleSearchBarInputs,
      uploadPhoto,
      handleCreateBusiness,
      handleCreateBusinessSubmit,
      getMyBusinesses
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
          handleSearchBarInputs,
          uploadPhoto,
          handleCreateBusiness,
          handleCreateBusinessSubmit,
          getMyBusinesses
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
export default withRouter(MyProvider)