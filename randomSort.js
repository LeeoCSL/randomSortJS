randomSort = arr => {
  const ordenado = arr => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }
    return true;
  };

  shuffle = arr => {
    let count = arr.length,
      temp,
      index;

    while (count > 0) {
      index = Math.floor(Math.random() * count);
      count--;

      temp = arr[count];
      arr[count] = arr[index];
      arr[index] = temp;
    }

    return arr;
  };

  sort = arr => {
    let sorted = false;
    while (!sorted) {
      arr = shuffle(arr);
      sorted = ordenado(arr);
    }
    return arr;
  };

  return sort(arr);
};

let vetor = [];
populaVetor = () => {
  const size = Math.floor(Math.random() * 100);
  console.log("tamanho", size);
  for (let i = 0; i < size; i++) {
    vetor[i] = Math.floor(Math.random() * size);
  }
};

populaVetor();
console.log("Vetor: ", vetor);
console.log("Ordenado: ", randomSort(vetor));
