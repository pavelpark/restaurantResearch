import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer vXbKRfHlypn2U3ZUYd-QkX4R8xrXOF9TkdiB-SqkWCTBMzatbCw6R7jhU2xwZPjykbBcM86obY6WhaoFuJk_ufZZxPJIQpuSWbztuCxQRlanZXySLFp43TQsXmpPXnYx'
    }
});
