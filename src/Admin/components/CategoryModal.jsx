import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../utils/Firebase.Config'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


function CategoryModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [CategoryName, setCategoryName] = useState("")
  const [CategoryImage, setCategoryImage] = useState(null)

  const AddCategory = (e) => {
    e.preventDefault();

    const storageRef = ref(storage, `images/${CategoryImage.name}`);
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, CategoryImage).then((snapshot) => {

      getDownloadURL(snapshot.ref)
        .then((url) => {
          const payload = {
            CategoryName,
            CategoryImage: url
          }
          console.log(payload)
        })
        .catch((error) => {
          // Handle any errors
          console.log(error)
        });

    });

  }

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add Categories
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={AddCategory}>
            <div className="mb-3">
              <label htmlFor="CategoryName" className="form-label">
                Category Name
              </label>
              <input
                value={CategoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                type="text"
                className="form-control"
                id="CategoryName"
                aria-describedby="emailHelp"
              />

            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Category Image
              </label>
              <input className="form-control" onChange={(e) => setCategoryImage(e.target.files[0])} type="file" id="formFile" />
            </div>


            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default CategoryModal;