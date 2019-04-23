import React from 'react'

const productModal = () => {
    return (
        <div className="modal fade" id="product-image-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <ion-icon name="close" id="product-image-close-button" data-dismiss="modal" aria-label="Close"></ion-icon>
                    <div className="modal-body">
                        <img className="modal-body-img" src="https://storage.googleapis.com/turboair-israel/products/norma.jpg" alt="קולט אדים דגם ..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default productModal;
