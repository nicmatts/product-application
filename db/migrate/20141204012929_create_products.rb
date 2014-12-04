class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.integer :product_rate
      t.string :product_unit

      t.timestamps
    end
  end
end
