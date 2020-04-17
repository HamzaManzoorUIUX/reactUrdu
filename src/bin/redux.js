import { createStore,combineReducers } from "redux";
// import { JsonWebTokenError } from "jsonwebtoken";
const axios = require('axios');
// data sample use in reducers  





const login=[
  {
    id:1,
    userName:"admin",
    password:"admin"
  }
]
const myBook = [

];
 
const IntrestNews = [
  {
    id: 1,
    Title: "6 سالہ بچے نے سپیڈ ڈرمنگ کا عالمی ریکارڈ توڑ دیا",
    Data: `ایک بھارتی ڈرمر نے صرف 6 سال کی عمر میں سپیڈ ڈرمنگ کا  ریکارڈ توڑ کر گینیز بک آف ورلڈ ریکارڈ میں اپنا نام درج کرا لیا ہے۔ انہوں نے 3 منٹ میں 5500 بار ڈرم   بجا کر سابقہ عالمی ریکارڈ توڑ دیا۔
    6سالہ ڈیواگی ڈکشٹ کو بھارت کے کم عمر ترین ڈرمر کے طور پر بھی جانا جاتا ہے۔ انہیں  نے 3 منٹ میں 5500 بار سٹک سے ڈرم بجا کر گینیز ورلڈ ریکارڈ  میں اپنا نام درج کرا لیا ہے۔
    اُن کا کہنا ہے کہ جب وہ  چلنا سیکھ رہے تھے، تب سے ہی ڈرم بجا رہے ہیں۔انہوں نے ٹائمز آف انڈیا کو بتایا کہ جب وہ دو سال کے تھے، تب اُن کے والد ایک ڈرم سیٹ لائے تھے۔ اس کے بعد وہ اپنے والد سے پہلے ڈرم سٹک اٹھا لیتے اور بجانا شروع کر دیتے۔
    ڈکشٹ کا کہنا ہے کہ وہ فائٹر جیٹ پائلٹ بننا چاہتے ہیں لیکن اس وقت تک وہ اپنی ڈرم بجانے کی صلاحیت کو بھی بہتر بنانا چاہتے ہیں۔`,
    Reporter: "Usman",
    Categories: "Intresting",
    Date:new Date(),
    path: "assets/images/6yearDrum.jpg"
  },
  {
    id: 2,
    Title: "6 سالہ بچے نے سپیڈ ڈرمنگ کا عالمی ریکارڈ توڑ دیا",
    Data: `ایک بھارتی ڈرمر نے صرف 6 سال کی عمر میں سپیڈ ڈرمنگ کا  ریکارڈ توڑ کر گینیز بک آف ورلڈ ریکارڈ میں اپنا نام درج کرا لیا ہے۔ انہوں نے 3 منٹ میں 5500 بار ڈرم   بجا کر سابقہ عالمی ریکارڈ توڑ دیا۔
    6سالہ ڈیواگی ڈکشٹ کو بھارت کے کم عمر ترین ڈرمر کے طور پر بھی جانا جاتا ہے۔ انہیں  نے 3 منٹ میں 5500 بار سٹک سے ڈرم بجا کر گینیز ورلڈ ریکارڈ  میں اپنا نام درج کرا لیا ہے۔
    اُن کا کہنا ہے کہ جب وہ  چلنا سیکھ رہے تھے، تب سے ہی ڈرم بجا رہے ہیں۔انہوں نے ٹائمز آف انڈیا کو بتایا کہ جب وہ دو سال کے تھے، تب اُن کے والد ایک ڈرم سیٹ لائے تھے۔ اس کے بعد وہ اپنے والد سے پہلے ڈرم سٹک اٹھا لیتے اور بجانا شروع کر دیتے۔
    ڈکشٹ کا کہنا ہے کہ وہ فائٹر جیٹ پائلٹ بننا چاہتے ہیں لیکن اس وقت تک وہ اپنی ڈرم بجانے کی صلاحیت کو بھی بہتر بنانا چاہتے ہیں۔`,
    Reporter: "Usman",
    Categories: "Intresting",
    Date:new Date(),
    path: "assets/images/6yearDrum.jpg"
  },
  {
    id: 3,
    Title: "6 سالہ بچے نے سپیڈ ڈرمنگ کا عالمی ریکارڈ توڑ دیا",
    Data: `ایک بھارتی ڈرمر نے صرف 6 سال کی عمر میں سپیڈ ڈرمنگ کا  ریکارڈ توڑ کر گینیز بک آف ورلڈ ریکارڈ میں اپنا نام درج کرا لیا ہے۔ انہوں نے 3 منٹ میں 5500 بار ڈرم   بجا کر سابقہ عالمی ریکارڈ توڑ دیا۔
    6سالہ ڈیواگی ڈکشٹ کو بھارت کے کم عمر ترین ڈرمر کے طور پر بھی جانا جاتا ہے۔ انہیں  نے 3 منٹ میں 5500 بار سٹک سے ڈرم بجا کر گینیز ورلڈ ریکارڈ  میں اپنا نام درج کرا لیا ہے۔
    اُن کا کہنا ہے کہ جب وہ  چلنا سیکھ رہے تھے، تب سے ہی ڈرم بجا رہے ہیں۔انہوں نے ٹائمز آف انڈیا کو بتایا کہ جب وہ دو سال کے تھے، تب اُن کے والد ایک ڈرم سیٹ لائے تھے۔ اس کے بعد وہ اپنے والد سے پہلے ڈرم سٹک اٹھا لیتے اور بجانا شروع کر دیتے۔
    ڈکشٹ کا کہنا ہے کہ وہ فائٹر جیٹ پائلٹ بننا چاہتے ہیں لیکن اس وقت تک وہ اپنی ڈرم بجانے کی صلاحیت کو بھی بہتر بنانا چاہتے ہیں۔`,
    Reporter: "Usman",
    Categories: "Intresting",
    Date:new Date(),
    path: "assets/images/6yearDrum.jpg"
  },
  {
    id: 4,
    Title: "6 سالہ بچے نے سپیڈ ڈرمنگ کا عالمی ریکارڈ توڑ دیا",
    Data: `ایک بھارتی ڈرمر نے صرف 6 سال کی عمر میں سپیڈ ڈرمنگ کا  ریکارڈ توڑ کر گینیز بک آف ورلڈ ریکارڈ میں اپنا نام درج کرا لیا ہے۔ انہوں نے 3 منٹ میں 5500 بار ڈرم   بجا کر سابقہ عالمی ریکارڈ توڑ دیا۔
    6سالہ ڈیواگی ڈکشٹ کو بھارت کے کم عمر ترین ڈرمر کے طور پر بھی جانا جاتا ہے۔ انہیں  نے 3 منٹ میں 5500 بار سٹک سے ڈرم بجا کر گینیز ورلڈ ریکارڈ  میں اپنا نام درج کرا لیا ہے۔
    اُن کا کہنا ہے کہ جب وہ  چلنا سیکھ رہے تھے، تب سے ہی ڈرم بجا رہے ہیں۔انہوں نے ٹائمز آف انڈیا کو بتایا کہ جب وہ دو سال کے تھے، تب اُن کے والد ایک ڈرم سیٹ لائے تھے۔ اس کے بعد وہ اپنے والد سے پہلے ڈرم سٹک اٹھا لیتے اور بجانا شروع کر دیتے۔
    ڈکشٹ کا کہنا ہے کہ وہ فائٹر جیٹ پائلٹ بننا چاہتے ہیں لیکن اس وقت تک وہ اپنی ڈرم بجانے کی صلاحیت کو بھی بہتر بنانا چاہتے ہیں۔`,
    Reporter: "Usman",
    Categories: "Intresting",
    Date:new Date(),
    path: "assets/images/6yearDrum.jpg"
  },
  {
    id: 5,
    Title: "6 سالہ بچے نے سپیڈ ڈرمنگ کا عالمی ریکارڈ توڑ دیا",
    Data: `ایک بھارتی ڈرمر نے صرف 6 سال کی عمر میں سپیڈ ڈرمنگ کا  ریکارڈ توڑ کر گینیز بک آف ورلڈ ریکارڈ میں اپنا نام درج کرا لیا ہے۔ انہوں نے 3 منٹ میں 5500 بار ڈرم   بجا کر سابقہ عالمی ریکارڈ توڑ دیا۔
    6سالہ ڈیواگی ڈکشٹ کو بھارت کے کم عمر ترین ڈرمر کے طور پر بھی جانا جاتا ہے۔ انہیں  نے 3 منٹ میں 5500 بار سٹک سے ڈرم بجا کر گینیز ورلڈ ریکارڈ  میں اپنا نام درج کرا لیا ہے۔
    اُن کا کہنا ہے کہ جب وہ  چلنا سیکھ رہے تھے، تب سے ہی ڈرم بجا رہے ہیں۔انہوں نے ٹائمز آف انڈیا کو بتایا کہ جب وہ دو سال کے تھے، تب اُن کے والد ایک ڈرم سیٹ لائے تھے۔ اس کے بعد وہ اپنے والد سے پہلے ڈرم سٹک اٹھا لیتے اور بجانا شروع کر دیتے۔
    ڈکشٹ کا کہنا ہے کہ وہ فائٹر جیٹ پائلٹ بننا چاہتے ہیں لیکن اس وقت تک وہ اپنی ڈرم بجانے کی صلاحیت کو بھی بہتر بنانا چاہتے ہیں۔`,
    Reporter: "Usman",
    Categories: "Intresting",
    Date:new Date(),
    path: "assets/images/6yearDrum.jpg"
  },
  {
    id: 6,
    Title: "6 سالہ بچے نے سپیڈ ڈرمنگ کا عالمی ریکارڈ توڑ دیا",
    Data: `ایک بھارتی ڈرمر نے صرف 6 سال کی عمر میں سپیڈ ڈرمنگ کا  ریکارڈ توڑ کر گینیز بک آف ورلڈ ریکارڈ میں اپنا نام درج کرا لیا ہے۔ انہوں نے 3 منٹ میں 5500 بار ڈرم   بجا کر سابقہ عالمی ریکارڈ توڑ دیا۔
    6سالہ ڈیواگی ڈکشٹ کو بھارت کے کم عمر ترین ڈرمر کے طور پر بھی جانا جاتا ہے۔ انہیں  نے 3 منٹ میں 5500 بار سٹک سے ڈرم بجا کر گینیز ورلڈ ریکارڈ  میں اپنا نام درج کرا لیا ہے۔
    اُن کا کہنا ہے کہ جب وہ  چلنا سیکھ رہے تھے، تب سے ہی ڈرم بجا رہے ہیں۔انہوں نے ٹائمز آف انڈیا کو بتایا کہ جب وہ دو سال کے تھے، تب اُن کے والد ایک ڈرم سیٹ لائے تھے۔ اس کے بعد وہ اپنے والد سے پہلے ڈرم سٹک اٹھا لیتے اور بجانا شروع کر دیتے۔
    ڈکشٹ کا کہنا ہے کہ وہ فائٹر جیٹ پائلٹ بننا چاہتے ہیں لیکن اس وقت تک وہ اپنی ڈرم بجانے کی صلاحیت کو بھی بہتر بنانا چاہتے ہیں۔`,
    Reporter: "Usman",
    Categories: "Intresting",
    Date:new Date(),
    path: "assets/images/6yearDrum.jpg"
  },
];
const myPoetry=[
  {
    id:1,
    PoetName:"Usman",
    catagory:"abc",
    data:"bncskjdbcksj"
  },{
    id:2,
    PoetName:"Usman",
    catagory:"abc",
    data:"bncskjdbcksj"
  },{
    id:3,
    PoetName:"Usman",
    catagory:"abc",
    data:"bncskjdbcksj"
  },{
    id:4,
    PoetName:"Usman",
    catagory:"abc",
    data:"bncskjdbcksj"
  },{
    id:5,
    PoetName:"Usman",
    catagory:"abc",
    data:"bncskjdbcksj"
  },{
    id:6,
    PoetName:"Usman",
    catagory:"abc",
    data:"bncskjdbcksj"
  }
]
const loggedin={
  id:0,
  userName:"",
  log:false
}
// redux actions

// action for IntrestNews
const myIntrestNews=(state=[...IntrestNews],action)=>{
  switch(action.type){
    case "addState":
      
      return [...state,action.payload];
    case "deleteState":
      return state; 
    default:
      return state
  }
}

const myLoggedIn = (state = loggedin, action) => {
  switch (action.type) {
    case "adData":
      return {
        id:action.payload.id,
        userName:action.payload.userName,
        log:action.payload.log
      };
  default:
    return state
  }
  // return state;
};
const myLogin = (state = [...login], action) => {
  switch (action.type) {
    case "asdData":
      return [...state, action.payload];
  default:
    return [...state]
  }
  // return state;
};
const myBookRudcer = (state = [...myBook], action) => {
  switch (action.type) {
    case "addBooks":
      state=[...state, action.payload];
      console.log(state);
      
      return state
  default:
    return [...state]
  }
  // return state;
};

const myPoetryRudcer = (state = [...myPoetry], action) => {
    switch (action.type) {
      case "asdData":
        return [...state, action.payload];
        default:
          return [...state]
    }
    // return state;
  };
var allRedux=combineReducers({myBookRudcer,myPoetryRudcer,myLogin,myLoggedIn,myIntrestNews})
const store = createStore(allRedux);
export default store;
