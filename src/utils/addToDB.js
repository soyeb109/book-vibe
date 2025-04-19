import Swal from "sweetalert2";

const getStoredBook = () => {

    const storedBookSTR = localStorage.getItem("readList");

    if(storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    } else {
        return [];
    }

}

export const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();

    if(storedBookData.includes(id)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "This Data Already Exists!",         
          });
    } else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData)
        localStorage.setItem("readList", data)
        

    }
}

