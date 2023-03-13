import axios from 'axios'
import React, { Component } from 'react'

export default class ListMoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null,
      error: null,
    };
  }


  //componentDidMount chạy đúng một lần và sau khi render giao diện
  componentDidMount() {
    this.setState({
      loading: true,
      data: null,
      error: null,
    })
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOSIsIkhldEhhblN0cmluZyI6IjI0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MDE1NjgwMDAwMCIsIm5iZiI6MTY2MTcwNjAwMCwiZXhwIjoxNjkwMzA0NDAwfQ.v3QBEWqiclIwpSJXtVil8Lu30xYH1J5FT82rQrUyv1c"
      },
    })
      .then((result) => {
        console.log(result.data);
        this.setState({
          loading: false,
          data: result.data,
          error: null,
        })
      })
      .catch((error) => {
        this.setState({
          loading: false,
          data: error.data,
          error: error,
        })
      })
  };

  render() {
    return (
      <div>ListMoviePage</div>
    )
  }
}
