import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import './item-details.css';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export { Record };

class ItemDetails extends Component {

    // swapiService = new SwapiService();

    state = {
        item: null,
        loading: true,
        hasError: false,
        imgUrl: ''
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImg !== prevProps.getImg
        ) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImg } = this.props;

        if (!itemId) {
            this.setState({
                loading: false
            });
            return;
        }

        this.setState({
            loading: true,
            hasError: false
        });

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false,
                    hasError: false,
                    imgUrl: getImg(item)
                });
            })
            .catch(() => {
                this.setState({
                    item: {},
                    loading: false,
                    hasError: true
                });
            });
    }

    render() {

        const { loading, hasError, item } = this.state;

        const spinner = loading ? <Spinner /> : null;
        const errorMessage = hasError ? <ErrorIndicator /> : null;
        const content = (!loading && !hasError) ? <ItemView
            {...this.props}
            item={this.state.item} img={this.state.imgUrl}
            records={
                React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, { item });
                })
            }
        /> : null;

        if (loading) {
            return (
                <div className="item-details card">
                    {spinner}
                </div>
            );
        }

        if (!item) {
            return <span>Select an person from a list</span>;
        }

        return (
            <div className="item-details card">
                {errorMessage}
                {content}
            </div>
        );
    }
}

const ItemView = ({ item, img, records, detailed, history }) => {
    const { id, name } = item;

    const detailsButn = detailed ? null : <DetailsBtn itemId={id} history={history} />;

    return (
        <React.Fragment>
            <div className="item-image text-center">
                <img width="100%"
                    alt=""
                    src={img} />
                {detailsButn}
            </div>

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {records}
                </ul>
                <ErrorButton />
            </div>
        </React.Fragment>
    );
};

const DetailsBtn = ({itemId, history}) => {
    return (
        <button className="btn btn-primary mt-2"
            onClick={() => {
                history.push(`${itemId}/detailed`);
            }}
        >
            Details
        </button>
    );
};

export default withRouter(ItemDetails);