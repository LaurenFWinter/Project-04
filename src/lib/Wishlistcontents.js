class Wishlistcontents {

  static getContents() {
    return JSON.parse(localStorage.getItem('wishlist')) || []
  }

  static setContents(contents) {
    localStorage.setItem('wishlist', JSON.stringify(contents))
  }

}

export default Wishlistcontents
