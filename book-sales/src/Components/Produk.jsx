import { useRef, useState } from "react";

import ProdukData from "../Utils/ProdukData";
import styles from "../styles/Produk.module.css";

function Produk() {
  const [produkList, setProdukList] = useState([...ProdukData]);
  // let produkList = [...ProdukData];
  // const produkContainerRef = useRef(null);

  const handleClick = () => {
    // 1. Objek newProduk ditutup dengan benar
    const newProduk = {
      id: produkList.length + 1,
      name: "Printer Epson",
      tahun: 2023,
      harga: "Rp. 3.000.000",
      gambar: "https://placehold.co/150",
    };

    // Menambahkan Produk baru ke State produkList
    setProdukList((prevList) => [...prevList, newProduk]);
    alert("Produk baru berhasil ditambahkan!");
  };

  return (
    <div className={styles.produkContainer}>
      <h1 className={styles.title}>Daftar Produk</h1>
      <div className={styles.cardContainer}>
        {produkList.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.gambar} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Tahun: {item.tahun}</p>
            <p>Harga: {item.harga}</p>
          </div>
        ))}
      </div>
      <button onClick={handleClick} className={styles.addButton}>
        Tambah Produk Baru
      </button>
    </div>
  );
}

export default Produk;
