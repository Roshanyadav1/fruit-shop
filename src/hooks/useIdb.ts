import { openDB } from "idb";

const useIdb = () => {
    
  const fetchData = async (dbName: string, TName: string) => {
    try {
      const db = await openDB(dbName, 1, {
        upgrade(db) {
          db.createObjectStore(TName, { keyPath: "id", autoIncrement: true });
        },
      });
      const tx = db.transaction(TName, "readonly");
      const store = tx.objectStore(TName);
      const result = await store.getAll();
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAddItem = async (dbName: string, TName: string, item: any) => {
    try {
      const db = await openDB(dbName, 1);
      const tx = db.transaction(TName, "readwrite");
      const store = tx.objectStore(TName);
      await store.add({ item });
      await tx.done;
      const result = fetchData(dbName , TName)
      return result
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleDeleteItem = async (dbName: string, TName: string, id : any) => {
    try {
      const db = await openDB(dbName, 1);
      const tx = db.transaction(TName, 'readwrite');
      const store = tx.objectStore(TName);
      await store.delete(id);
      await tx.done;
      const result = fetchData(dbName , TName)
      return result
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return {
    fetchData,
    handleAddItem,
    handleDeleteItem
  };
};

export default useIdb;
