module.exports.sendTransaction = (web3) => {
    return new Promise((resolve, reject) => {
        // web3.eth.sendTransaction({
        //         from: '0x123...',
        //         data: '0x432...'
        //     })
        //     .once('sending', function (payload) {
        //         console.log('sending transaction');
        //     })
        //     .once('sent', function (payload) {
        //         console.log('transaction sent');
        //     })
        //     .once('transactionHash', function (hash) {
        //         console.log('transaction hash');
        //     })
        //     .once('receipt', function (receipt) {
        //         console.log('transaction receipt');
        //     })
        //     .on('confirmation', function (confNumber, receipt, latestBlockHash) {
        //         console.log('transaction confirmation');
        //     })
        //     .on('error', function (error) {
        //         console.log(error);
        //         reject(error)
        //     })
        //     .then(function (receipt) {
        //         // will be fired once the receipt is mined
        //         console.log('receipt mined');
        //         resolve()
        //     });
    })
}