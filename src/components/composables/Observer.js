import { ref } from 'vue';
import { cards } from '../Services.vue';

const exportedCards = ref(cards);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

export const useObserver = () => {
  return {
    exportedCards,
    observer
  };
};