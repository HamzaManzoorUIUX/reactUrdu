this.props.myLogin.map(e => {
    if (
      
    ) {
      this.props.dispatch({
        payload: {
          id: e.id,
          userName: e.userName,
          password: e.password
        },
        type: "adData"
      });
      this.props.history.push("/Dashbord");
    } else {
      alert("Error");
    }
    return 0;
  });


  this.props.myLoggedIn.id === 0 ? 