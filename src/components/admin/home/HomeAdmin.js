import React, { Component } from "react";
import Modal from "../keto/KetoModal";
import axios from "axios";

class HomeAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: [],
      modal: false,
      activeItem: {
        amount: "",
        brand: "",
        brandUrl: "",
        calories: "",
        image: "",
        nutrition: "",
        price: "",
        sale: "",
        title: "",
        completed: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("menotrix.pythonanywhere.com/meals/keto")
      .then((res) => this.setState({ todoList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();
    if (item.id) {
      axios
        .put(`menotrix.pythonanywhere.com/meals/keto/${item.id}`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post(`menotrix.pythonanywhere.com/meals/keto`, item)
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(`menotrix.pythonanywhere.com/meals/keto/${item.id}`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = {
      amount: "",
      brand: "",
      brandUrl: "",
      calories: "",
      image: "",
      nutrition: "",
      price: "",
      sale: "",
      title: "",
      completed: false,
    };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
        >
          Complete
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
        >
          Incomplete
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(
      (item) => item.completed === viewCompleted
    );

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
          title={item.id}
        >
          {item.title}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-dark text-uppercase text-center my-4">
          Admin Panel
        </h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button className="btn btn-primary m-3">
                  <a href="adminpaneltest/vegan" className="text-white">
                    Vegn
                  </a>
                </button>
                <button className="btn btn-primary m-3">
                  <a href="adminpaneltest/keto" className="text-white">
                    Keto
                  </a>
                </button>
                <button className="btn btn-primary m-3">
                  <a href="adminpaneltest/fruits" className="text-white">
                    Fruits
                  </a>
                </button>
                <button className="btn btn-primary m-3">
                  <a href="adminpaneltest/meat" className="text-white">
                    Meat
                  </a>
                </button>
                <button className="btn btn-primary m-3">
                  <a href="adminpaneltest/chicken" className="text-white">
                    Chicken
                  </a>
                </button>
                <button className="btn btn-primary m-3">
                  <a href="adminpaneltest/bake" className="text-white">
                    Bakeries
                  </a>
                </button>
                <button className="btn btn-primary m-3">
                  <a href="adminpaneltest/vegetables" className="text-white">
                    Vegetables
                  </a>
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
            // onSave={this.postProduct}
          />
        ) : null}
      </main>
    );
  }
}

export default HomeAdmin;
