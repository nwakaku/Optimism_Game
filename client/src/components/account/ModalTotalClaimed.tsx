function ModalTotalClaimed({ setModalTotalClaimed, totalClaimed }: { setModalTotalClaimed: React.Dispatch<React.SetStateAction<boolean>>, totalClaimed: string }) {

    return (
        <div className="modal-wrapper modal-wrapper-claim-winnings" onClick={(e) => { setModalTotalClaimed(false) }}>
            <div data-w-id="f44f9440-e55b-49f6-ba7d-b57691902e6b" className="modal-outside-trigger"></div>
            <div className="modal-inner-wrapper ethereum-details-modal">
                <div className="div-block-41"><img src="images/close.png" loading="lazy" width="20" height="20"
                    alt="" className="image-18" onClick={(e) => { setModalTotalClaimed(false) }} /></div>
                <div className="div-block-40"><img src="images/trophy.png" loading="lazy" width="135" srcSet="images/trophy-p-500.png 500w, images/trophy.png 512w" sizes="(max-width: 479px) 0px, 100vw" alt="" className="image-15" /></div>
                <h2>Total claimed winnings</h2>
                <h3>You have claimed ${totalClaimed}</h3>
            </div>
        </div>
    )
}

export default ModalTotalClaimed;