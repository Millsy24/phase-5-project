class CreateShoes < ActiveRecord::Migration[6.1]
  def change
    create_table :shoes do |t|
      t.string :name
      t.string :brand
      t.integer :price
      t.integer :size
      t.string :color

      t.timestamps
    end
  end
end
