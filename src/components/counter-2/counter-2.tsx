import { component$, useSignal } from "@builder.io/qwik";

export const Counter2 = component$(() => {
  const count = useSignal(0);

  return (
    <>
      <div>
        <button type="button" onClick$={() => count.value++}>
          count is {count.value}
        </button>
      </div>
    </>
  );
});
