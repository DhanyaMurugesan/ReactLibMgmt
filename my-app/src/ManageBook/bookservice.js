

import Axios from 'axios';
class Bookservice {

    loggedIn=false;

     url='http://localhost:8080/Books/manage/';
     urlcat='http://localhost:8080/Categories/manage/';
     urluser='http://localhost:8080/Users/manage/';
     urlsub='http://localhost:8080/Subscribed/manage/';
    getBooks()
    {
        return Axios.get(this.url);
    }
    getBook(id)
    {
        return Axios.get(this.url + id);
    }
   deleteBook(id){
       return Axios.delete(this.url + id);
   }
   getCatg()
   {
       return Axios.get(this.urlcat);
   }
   getCat(id)
   {
       return Axios.get(this.urlcat + id);
   }
  deleteCatg(id){
      return Axios.delete(this.urlcat + id);
  }
  getUser(){
      return Axios.get(this.urluser);
  }
  getSubs(){
      return Axios.get(this.urlsub);
  }
  deleteSub(id)
{
    return Axios.delete(this.urlsub + id);
}}

export default new Bookservice();