export type TableColumn = {
  name: string;
  sortable: boolean;
  i18next: string;
  searchable: boolean;
  selector: string;
  getData?: ((data: unknown) => (JSX.Element | string));
  isUnique?: boolean;
}