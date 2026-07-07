import { XIcon } from "lucide-react";
const AddressForm = ({ resetForm, handleSubmit, editingId, setForm, form }) => {
  return (
    <>
      <div
        onClick={() => resetForm()}
        className="fixed inset-0 z-50 bg-black/50"
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <form className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              {editingId ? "Edit Address" : "Add New Address"}
            </h2>

            <button
              type="button"
              onClick={() => resetForm()}
              className=" cursor-pointer rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Label
            </label>

            <input
              onChange={(e) => setForm({ ...form, label: e.target.value })}
              type="text"
              required
              placeholder="Home, Work, etc."
              value={form.label}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-600"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Street Address
            </label>
            <input
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              type="text"
              required
              value={form.address}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-600"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                type="text"
                required
                value={form.city}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-600"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                onChange={(e) => setForm({ ...form, state: e.target.value })}
                type="text"
                required
                value={form.state}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-600"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Zip
              </label>
              <input
                onChange={(e) => setForm({ ...form, state: e.target.value })}
                type="text"
                required
                value={form.zip}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-600"
              />
            </div>
            <div className="flex items-end">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.isDefault}
                  onChange={() => setForm({ ...form, state: e.target.value })}
                />
                <span className="text-sm text-gray-700">Set as default</span>
              </label>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="submit"
              className="rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              {editingId ? "Update Address" : "Save Address"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddressForm;
