<svelte:options customElement="test-textarea-formitem-wrapper" />

<!-- Script -->
<script lang="ts">
  import GoAFormItem from "../form-item/FormItem.svelte";
  import GoATextArea from "./TextArea.svelte";

  export let label: string = "";
  export let testIdFormItem: string = "";

  export let inputId: string = "";
  export let arialabel: string = "";
  export let inputName: string = "";
  export let testIdInput: string = "";
</script>

<!-- HTML -->

<GoAFormItem {label} testid={testIdFormItem}>
  <GoATextArea name={inputName} {arialabel} testid={testIdInput}
  ></GoATextArea>
</GoAFormItem>
